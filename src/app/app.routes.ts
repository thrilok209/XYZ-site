import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductviewingPageComponent } from './pages/productviewing-page/productviewing-page.component';
import { CartviewingPageComponent } from './pages/cartviewing-page/cartviewing-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { RegisterPageComponent } from './pages/register-page/register-page.component'
import { UserinfoPageComponent } from './pages/userinfo-page/userinfo-page.component'





import {Routes} from "@angular/router"
export const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'product',
    component: ProductviewingPageComponent
  },
  {
    path: 'product/:id',
    component: ProductviewingPageComponent
  },
  {
    path: 'cart',
    component: CartviewingPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'userInfo',
    component: UserinfoPageComponent
  }
]
