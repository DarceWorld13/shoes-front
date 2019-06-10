import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChaussuresComponent } from 'src/chaussures/chaussures.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AjouterChaussureComponent } from './ajouter-chaussure/ajouter-chaussure.component';

const appRoutes:Routes=[
  {path:'produits', component:ChaussuresComponent},
  {path:'ajouter', component:AjouterChaussureComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ChaussuresComponent,
    AjouterChaussureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule, 
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
