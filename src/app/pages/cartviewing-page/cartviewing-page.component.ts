import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartviewing-page',
  templateUrl: './cartviewing-page.component.html',
  styleUrls: ['./cartviewing-page.component.css']
})
export class CartviewingPageComponent implements OnInit {
  cartProductsId=[]
  totalPrice:number=0;
  checkoutButton:boolean=true;
  clearCartButton:boolean=true;
  totalPriceRow:boolean=true;

  constructor() { }

  ngOnInit() {
    this.checkData()

  }
  checkout(){

  }
  clearCart(){
    localStorage.removeItem('cart');
    this.checkData()
  }
  checkData(){
    this.cartProductsId=JSON.parse(localStorage.getItem('cart'))
    for(let i=0;i<this.cartProductsId.length ; i++){
       this.totalPrice=this.cartProductsId[i].quantity*100 + this.totalPrice
    }


    if(this.totalPrice==0) {
      this.checkoutButton=true;
      this.totalPrice=0;
      this.totalPriceRow=true;
    }
      if(this.totalPrice>0) {
        this.checkoutButton=false;
         this.totalPriceRow=false;
      }
      if(JSON.parse(localStorage.getItem('cart'))==null) this.clearCartButton=true;
      if(JSON.parse(localStorage.getItem('cart'))!=null) this.clearCartButton=false;

  }



}
