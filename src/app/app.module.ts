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
import { ShipComponent } from './components/ship/ship.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cottages', component: CottagesComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'adventures', component: AdventuresComponent },
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
    ShipsComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
