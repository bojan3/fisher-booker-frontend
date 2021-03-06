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
import { FishingInstructorComponent } from './components/fishing-instructor/fishing-instructor.component';
import { FishingInstructorsComponent } from './components/fishing-instructors/fishing-instructors.component';
import { CottageOwnerComponent } from './components/cottage-owner/cottage-owner.component';
import { CottageOwnersComponent } from './components/cottage-owners/cottage-owners.component';
import { ShipOwnerComponent } from './components/ship-owner/ship-owner.component';
import { ShipOwnersComponent } from './components/ship-owners/ship-owners.component';
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RequestComponent } from './components/request/request.component';
import { RequestsComponent } from './components/requests/requests.component';

import { CottageOwnerPageComponent } from './components/cottage-owner-page/cottage-owner-page.component';
import { ShipOwnerPageComponent } from './components/ship-owner-page/ship-owner-page.component';
import { ClientPageComponent } from './components/client-page/client-page.component';
import { InstructorPageComponent } from './components/instructor-page/instructor-page.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { CottagePageComponent } from './components/cottage-page/cottage-page.component';
import { ImagesOfEntitiesComponent } from './components/images-of-entities/images-of-entities.component';
import { AddCottageComponent } from './components/add-cottage/add-cottage.component';
import { ShipService } from './services/ship.service';
import { ShipOwnerService } from './services/ship-owner.service';
import { ClientService } from './services/client.service';
import { FishingInstructorService } from './services/fishing-instructor.service';
import { CottageOwnerService } from './services/cottage-owner.service';
import { AccountInfoEditComponent } from './components/account-info-edit/account-info-edit.component';
import { EditRoomsComponent } from './components/edit-rooms/edit-rooms.component';
import { EditRulesComponent } from './components/edit-rules/edit-rules.component';
import { EditCottageOptionsComponent } from './components/edit-cottage-options/edit-cottage-options.component';
import { EditCottageSuperDealComponent } from './components/edit-cottage-super-deal/edit-cottage-super-deal.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

import { AccountRequestComponent } from './components/account-request/account-request.component';
import { AccountRequestsComponent } from './components/account-requests/account-requests.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';


const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cottages', component: CottagesComponent },
  { path: 'client_profile/cottages', component: CottagesComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'client_profile/ships', component: ShipsComponent },
  { path: 'adventures', component: AdventuresComponent },
  { path: 'fishing-instructors', component: FishingInstructorsComponent },
  { path: 'client_profile/fishing-instructors', component: FishingInstructorsComponent },
//  { path: 'cottage_owners', component: CottageOwnersComponent },
 // { path: 'ship_owners', component: ShipOwnersComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'client_profile/adventures', component: AdventuresComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'cottage_owner_profile', component: CottageOwnerPageComponent},
  { path: 'ship_owner_profile', component: ShipOwnerPageComponent},
  { path: 'admin_profile', component: AdminPageComponent},
  { path: 'client_profile', component: ClientPageComponent},
  { path: 'instructor_profile', component: InstructorPageComponent},
  { path: 'cottage/:id', component: CottagePageComponent },
  { path: 'add_cottage', component: AddCottageComponent },
  { path: 'admin_profile/cottages', component: CottagesComponent},
  { path: 'admin_profile/cottage_owners', component: CottageOwnersComponent},
  { path: 'admin_profile/ships', component: ShipsComponent},
  { path: 'admin_profile/ship_owners', component: ShipOwnersComponent},
  { path: 'admin_profile/adventures', component: AdventuresComponent},
  { path: 'admin_profile/instructors', component: FishingInstructorsComponent},
  { path: 'admin_profile/clients', component: ClientsComponent},
  { path: 'admin_profile/requests', component: RequestsComponent}


  { path: 'account-info', component: AccountInfoComponent},
  { path: 'account-info-edit', component: AccountInfoEditComponent},
  { path: 'register/verify/:token', component: VerifyAccountComponent}
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
    ClientsComponent,
    LogInComponent,
    CottageOwnerPageComponent,
    ClientPageComponent,
    InstructorPageComponent,
    ShipOwnerPageComponent,
    AccountInfoComponent,
    CottagePageComponent,
    RequestComponent,
    RequestsComponent,
    AccountRequestComponent,
    AccountRequestsComponent,
    NewAdminComponent,
    
    ImagesOfEntitiesComponent,
    AddCottageComponent,
    AccountInfoEditComponent,
    EditRoomsComponent,
    EditRulesComponent,
    EditCottageOptionsComponent,
    EditCottageSuperDealComponent,
    VerifyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule
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
    CottageService,
    ShipService,
    ShipOwnerService,
    ClientService,
    FishingInstructorService,
    CottageOwnerService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
