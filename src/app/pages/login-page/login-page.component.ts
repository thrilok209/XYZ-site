import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth , private router: Router , public headerComponent: HeaderComponent) { }
  errorMsg:string;
  ngOnInit() {
  }
  loginWithEmail(email , password){
    console.log(email,password)
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
         .then((user) => {
           console.log(user)
           localStorage.setItem('isLoggedIn','true')
           localStorage.setItem('email',this.afAuth.auth.currentUser.email )
           this.errorMsg='';
           this.headerComponent.checkLink()
           location.reload();
           this.router.navigate(['home'])
         })
         .catch(error => this.errorMsg=error);

               this.afAuth.authState.subscribe(auth=>{
             if(auth){
                localStorage.setItem('uid',auth.uid )

             }
     })
   }
   signWithEmail(){
     this.router.navigate(['register'])
   }
}
