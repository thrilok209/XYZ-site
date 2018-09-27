import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';

import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { FooterComponent } from './component/footer/footer.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductviewingPageComponent } from './pages/productviewing-page/productviewing-page.component';

import {CartDetailsService} from './cart-details.service';
import {UserDetailsService} from './user-details.service';

import { CartviewingPageComponent } from './pages/cartviewing-page/cartviewing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserinfoPageComponent } from './pages/userinfo-page/userinfo-page.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    ProductviewingPageComponent,
    CartviewingPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UserinfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
     // imports firebase/storage only needed for storage features
  ],
  providers: [HeaderComponent ,AngularFireDatabase,CartDetailsService,CartviewingPageComponent,UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
