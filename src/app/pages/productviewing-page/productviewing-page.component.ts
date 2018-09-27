import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {CartDetailsService} from '../../cart-details.service'
import { CartviewingPageComponent } from '../cartviewing-page/cartviewing-page.component'




@Component({
  selector: 'app-productviewing-page',
  templateUrl: './productviewing-page.component.html',
  styleUrls: ['./productviewing-page.component.scss']
})
export class ProductviewingPageComponent implements OnInit {
  id: number;
  private sub: any;
  productQuantity:number=0;
  cartButton:boolean=true;
  constructor(private route: ActivatedRoute , public cartDetails:CartDetailsService , public cartviewingPage :CartviewingPageComponent) {

}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
     });
    console.log(this.id);
  }
  changeQuanity(x){
    if(this.productQuantity >= 0){
      if(x==-1 && this.productQuantity == 0){
        return this.productQuantity;
      }
      this.productQuantity = this.productQuantity+x;

    }
    if(this.productQuantity > 0){
      this.cartButton=false;
    }
    if(this.productQuantity == 0){
      this.cartButton=true;
    }

  }
  addToCart(){
    // this.cartviewingPage.cartProductsId.push({id:this.id, quantity:this.productQuantity})
    // console.log(this.cartviewingPage.cartProductsId)

    let localarray=JSON.parse(localStorage.getItem('cart'))
    if(JSON.parse(localStorage.getItem('cart'))!=null){
      localarray.push({id:this.id, quantity:this.productQuantity})
      localStorage.setItem('cart' ,JSON.stringify(localarray ))
      console.log("here second")

    }
    if(JSON.parse(localStorage.getItem('cart'))==null || JSON.parse(localStorage.getItem('cart')).length==0 ){
      localarray=[]
      localarray.push({id:this.id, quantity:this.productQuantity})
      localStorage.setItem('cart' ,JSON.stringify(localarray ))
      console.log("here")
    }



    console.log(localarray)
    console.log(JSON.parse(localStorage.getItem('cart')))

  }

}
