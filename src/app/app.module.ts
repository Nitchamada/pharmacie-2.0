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


registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnectionComponent,
    HomeComponent,
    CarouselComponent,
    FormulaireInscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
