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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdventureComponent } from './components/adventure/adventure.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import { AccountService } from './services/account.service';
import { CottageService } from './services/cottage.service';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { ShipComponent } from './components/ship/ship.component';
import { CottageOwnerPageComponent } from './components/cottage-owner-page/cottage-owner-page.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cottages', component: CottagesComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'adventures', component: AdventuresComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'cottage_owner_profile', component: CottageOwnerPageComponent}
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
    ShipComponent,
    AdventuresComponent,
    LogInComponent,
    CottageOwnerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // MORA DA SE DODA
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AccountService,
    AuthService,
    ApiService,
    CottageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
