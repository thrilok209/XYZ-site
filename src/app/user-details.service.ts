import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';


import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  users: AngularFireList<any>;
  userData = {
   name : '' ,
   phone :  '' ,
   address :  '' ,
   email:'',
   $key:'',
   recentOrder:[]

  }
  userId:string;
  items: Observable<any[]>;
  usersDetails = []
  constructor(public afAuth: AngularFireAuth , public db:AngularFireDatabase ) {
    this.userId=localStorage.getItem('uid')
    this.users = db.list('users')

     this.users.snapshotChanges().subscribe(actions=>{
      console.log("here")
           actions.forEach(action=>{
             let y = action.payload.toJSON()
             // console.log("action:",action)

             console.log("action.key:",action.key)
             y["$key"] = action.key
             console.log("y= ",y)
               // console.log(action.payload.child('uid').val() )
             this.usersDetails.push(y)

           })
     })


   }



   check(){
     console.log("here")
     console.log(this.usersDetails)
     console.log("now Here :" ,this.usersDetails[2].$key)


     // console.log(this.users)

     this.users.update(this.userId,{ name:"thrilok" , address:"india" , recent:["hey" , "hi" , "hello"]  });
   }
   getuser(){
     this.afAuth.authState.subscribe(auth=>{
   if(auth){
      // localStorage.setItem('uid',auth.uid )
      for(let i = 0 ; i<this.usersDetails.length;i++){
        if(this.usersDetails[i].$key==auth){
          this.userData.name = this.usersDetails[i].name;
          this.userData.email = this.usersDetails[i].email;
          this.userData.phone = this.usersDetails[i].phone;
          this.userData.address = this.usersDetails[i].address;
          this.userData.recentOrder = this.usersDetails[i].recentOrder;
          this.userData.$key = this.usersDetails[i].$key;
        }
        // if(this.userData.$key == ''){
        //
        // }
      }

   }
})
  console.log("this.userData: " ,this.userData)
   }

   updateLogin(){
     console.log("here")
  //    this.afAuth.authState.subscribe(auth=>{
  //      if(auth){
  //       //  console.log(auth)
   //
  //    }
  //  });
   this.users.update(localStorage.getItem('uid') , {name:"" , phone:"", email:this.afAuth.auth.currentUser.email, recentOrder:[""] , address:"" , key:localStorage.getItem('uid')})

}
}
