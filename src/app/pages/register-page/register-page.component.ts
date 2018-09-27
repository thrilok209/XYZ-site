import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';

import {Router} from '@angular/router';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import {UserDetailsService} from '../../user-details.service';
import { HeaderComponent } from '../../component/header/header.component';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  errorMsg:string;
  constructor(public userDetails: UserDetailsService , public db:AngularFireDatabase ,public afAuth: AngularFireAuth , private router: Router , public headerComponent: HeaderComponent) {
    }

  ngOnInit() {

    this.userId=localStorage.getItem('uid')
  }
  signWithEmail(email , password , passwordCon){
    if(passwordCon!=password) return this.errorMsg="Password Doesn't Match";
    if(passwordCon==password)  this.errorMsg="";
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(user =>{
      console.log(email, password)
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email',this.afAuth.auth.currentUser.email )

      this.afAuth.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('uid',auth.uid )


        }
        this.headerComponent.checkLink()
        this.userDetails.updateLogin()
        // this.userDetails.getuser()

        location.reload();

        this.router.navigate(['home'])
      })

      // this.router.navigate(['home'])
    }).catch(error=>{
      console.error(error)
      this.errorMsg=error;

    })
  }

  check(){
    // console.log("here")
    // console.log(this.itemArray)
    // console.log("now Here :" ,this.itemArray[2].$key)
    //
    //
    // // console.log(this.users)
    //
    // this.users.update(this.userId,{ name:"thrilok" , address:"india" , recent:["hey" , "hi" , "hello"]  });
    // this.userDetails.check()
    this.userDetails.updateLogin()
    // this.userDetails.getuser()


    }
}
