import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';

import { ConnectionComponent } from './component/connection/connection.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CgvComponent } from './component/cgv/cgv.component';
import { FirstComponent } from './component/first/first.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'connection', component: ConnectionComponent},
  {path: 'formulaire-inscription', component: FormulaireInscriptionComponent},
  {path: 'cart', component: CartComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'cgv', component: CgvComponent},
  {path: 'first', component:FirstComponent},
  {path: 'contactUs', component:ContactUsComponent},
  {path: '**', redirectTo: 'first'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
