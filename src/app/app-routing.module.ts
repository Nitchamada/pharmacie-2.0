import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';

import { ConnectionComponent } from './component/connection/connection.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'connection', component: ConnectionComponent},
  {path: 'formulaire-inscription', component: FormulaireInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
