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
import { FishingInstructorComponent } from './components/fishing-instructor/fishing-instructor.component';
import { FishingInstructorsComponent } from './components/fishing-instructors/fishing-instructors.component';
import { CottageOwnerComponent } from './components/cottage-owner/cottage-owner.component';
import { CottageOwnersComponent } from './components/cottage-owners/cottage-owners.component';
import { ShipOwnerComponent } from './components/ship-owner/ship-owner.component';
import { ShipOwnersComponent } from './components/ship-owners/ship-owners.component';
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './components/clients/clients.component';




const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cottages', component: CottagesComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'adventures', component: AdventuresComponent },
  { path: 'instructors', component: FishingInstructorsComponent },
  { path: 'cottage_owners', component: CottageOwnersComponent },
  { path: 'ship_owners', component: ShipOwnersComponent },
  { path: 'clients', component: ClientsComponent }
];

@NgModule({
  declarations: [
    HeaderComponent,
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
    ShipComponent,
    AdventuresComponent,
    FishingInstructorComponent,
    FishingInstructorsComponent,
    CottageOwnerComponent,
    CottageOwnersComponent,
    ShipOwnerComponent,
    ShipOwnersComponent,
    ClientComponent,
    ClientsComponent
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
