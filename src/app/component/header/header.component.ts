import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginLink:boolean=false;
  constructor(public afAuth: AngularFireAuth ) { }

  ngOnInit() {
    this.checkLink()}
  checkLink(){
    if(localStorage.getItem('isLoggedIn')=="true") this.loginLink=true;
    else this.loginLink=false;
  }

  logout(){
    this.afAuth.auth.signOut();
    localStorage.setItem('isLoggedIn' , false)
    localStorage.setItem('email' , '')
    localStorage.setItem('uid' , '')
    this.loginLink=false;

  }

}
