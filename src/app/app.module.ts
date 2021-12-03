import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityComponent } from './components/entity/entity.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CottagesComponent } from './components/cottages/cottages.component';
import { ShipsComponent } from './components/ships/ships.component';
import { AdventuresComponent } from './components/adventures/adventures.component';
import { CottageComponent } from './components/cottage/cottage.component';
import { HttpClientModule } from '@angular/common/http';
import { AdventureComponent } from './components/adventure/adventure.component';
import { LogInComponent } from './components/log-in/log-in.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cottages', component: CottagesComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'adventures', component: AdventuresComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'signUp', component: SignUpComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    SignUpComponent,
    EntityComponent,
    AdminPageComponent,
    CottagesComponent,
    CottageComponent,
    AdventureComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // MORA DA SE DODA
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
