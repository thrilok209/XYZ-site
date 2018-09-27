import { Component, OnInit } from '@angular/core';

import {UserDetailsService} from '../../user-details.service';


@Component({
  selector: 'app-userinfo-page',
  templateUrl: './userinfo-page.component.html',
  styleUrls: ['./userinfo-page.component.css']
})
export class UserinfoPageComponent implements OnInit {

  constructor(public userDetails:UserDetailsService) { }
  user={
    name:'',
    email:'',
    phone:''
  }
  ngOnInit() {
    console.log("this.user:  " , this.user.name)
    console.log("this.userDetails.userData.email" ,this.userDetails.userData.email)

    this.userDetails.getuser();
    // user.name =this.userDetails.userData.name
    // user.email =this.userDetails.userData.email
    // user.phone =this.userDetails.userData.phone


  }

}
