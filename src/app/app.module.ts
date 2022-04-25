import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { HomeComponent } from './component/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CarouselComponent } from './component/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { CartComponent } from './component/cart/cart.component';

import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CgvComponent } from './component/cgv/cgv.component';
import { FirstComponent } from './component/first/first.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component' ; 

registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnectionComponent,
    HomeComponent,
    CarouselComponent,
    FormulaireInscriptionComponent,
    CartComponent,
    AboutUsComponent,
    CgvComponent,
    FirstComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
