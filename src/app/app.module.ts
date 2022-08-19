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
import { ShipService } from './services/ship.service';
import { ShipOwnerService } from './services/ship-owner.service';
import { ClientService } from './services/client.service';
import { FishingInstructorService } from './services/fishing-instructor.service';
import { CottageOwnerService } from './services/cottage-owner.service';

import { AccountRequestComponent } from './components/account-request/account-request.component';
import { AccountRequestsComponent } from './components/account-requests/account-requests.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { AccountInfoEditComponent } from './components/account-info-edit/account-info-edit.component';
import { EditRoomsComponent } from './components/edit-rooms/edit-rooms.component';
import { EditRulesComponent } from './components/edit-rules/edit-rules.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import { InstructorAdventuresComponent } from './components/instructor-adventures/instructor-adventures.component';
import { AddShipComponent } from './components/add-ship/add-ship.component';
import { ShipPageComponent } from './components/ship-page/ship-page.component';
import { EditOptionsComponent } from './components/edit-options/edit-options.component';
import { EditNavigationEquipmentComponent } from './components/edit-navigation-equipment/edit-navigation-equipment.component';
import { EditFishingEquipmentComponent } from './components/edit-fishing-equipment/edit-fishing-equipment.component';
import { CottageReservationsComponent } from './components/cottage-reservations/cottage-reservations.component';
import { CottageReservationComponent } from './components/cottage-reservation/cottage-reservation.component';
import { ShipReservationComponent } from './components/ship-reservation/ship-reservation.component';
import { ShipReservationsComponent } from './components/ship-reservations/ship-reservations.component';
import { AdventureReservationsComponent } from './components/adventure-reservations/adventure-reservations.component';
import { AdventureReservationComponent } from './components/adventure-reservation/adventure-reservation.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { MapsComponent } from './components/maps/maps.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { ImagesOfEntitiesComponent } from './components/images-of-entities/images-of-entities.component';
import { AddCottageComponent } from './components/add-cottage/add-cottage.component';
import { CottageComplaintComponent } from './components/cottage-complaint/cottage-complaint.component';
import { DeleteaccountComponent } from './components/deleteaccount/deleteaccount.component';
import { DeleteaccountsComponent } from './components/deleteaccounts/deleteaccounts.component';
import { ShipComplaintComponent } from './components/ship-complaint/ship-complaint.component';
import { InstructorComplaintComponent } from './components/instructor-complaint/instructor-complaint.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditAvailabilityPeriodComponent } from './components/edit-availability-period/edit-availability-period.component';
import { AddSuperDealComponent } from './components/add-super-deal/add-super-deal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSelectModule } from '@angular/material/select';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { CottageReviewComponent } from './components/cottage-review/cottage-review.component';
import { AdventureReviewComponent } from './components/adventure-review/adventure-review.component';
import { ShipReviewComponent } from './components/ship-review/ship-review.component';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { MatInputModule } from '@angular/material/input';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';

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
  { path: 'cottage_owner_profile', component: CottageOwnerPageComponent },
  { path: 'ship_owner_profile', component: ShipOwnerPageComponent },
  { path: 'admin_profile', component: AdminPageComponent },
  { path: 'client_profile', component: ClientPageComponent },
  { path: 'instructor_profile', component: InstructorPageComponent },
  { path: 'cottage/:id', component: CottagePageComponent },
  { path: 'ship/:id', component: ShipPageComponent },
  { path: 'add_cottage', component: AddCottageComponent },
  { path: 'admin_profile/cottages', component: CottagesComponent },
  { path: 'admin_profile/cottage_owners', component: CottageOwnersComponent },
  { path: 'admin_profile/ships', component: ShipsComponent },
  { path: 'admin_profile/ship_owners', component: ShipOwnersComponent },
  { path: 'admin_profile/adventures', component: AdventuresComponent },
  { path: 'admin_profile/instructors', component: FishingInstructorsComponent },
  { path: 'admin_profile/clients', component: ClientsComponent },
  { path: 'admin_profile/requests', component: RequestsComponent },
  { path: 'admin_profile/deleteaccounts', component: DeleteaccountsComponent },

  { path: 'account-info', component: AccountInfoComponent },
  { path: 'account-info-edit', component: AccountInfoEditComponent },
  { path: 'register/verify/:token', component: VerifyAccountComponent },
  { path: 'register/verify/:token', component: VerifyAccountComponent },
  { path: 'instructor-adventures/:instructorId', component: InstructorAdventuresComponent },
  { path: 'client_profile/cottage-reservations', component: CottageReservationsComponent },
  { path: 'client_profile/adventure-reservations', component: AdventureReservationsComponent },
  { path: 'client_profile/ship-reservations', component: ShipReservationsComponent },
  { path: 'client_profile/cottage-complaint/:cottageId', component: CottageComplaintComponent },
  { path: 'cottage-complaint/:cottageId', component: CottageComplaintComponent },
  { path: 'client_profile/ship-complaint/:shipId', component: ShipComplaintComponent },
  { path: 'ship-complaint/:shipId', component: ShipComplaintComponent },
  { path: 'client_profile/insturctor-complaint/:adventureId', component: InstructorComplaintComponent },
  { path: 'insturctor-complaint/:adventureId', component: InstructorComplaintComponent },
  { path: 'add_ship', component: AddShipComponent },
  { path: 'admin_profile/cottages', component: CottagesComponent },
  { path: 'admin_profile/cottage_owners', component: CottageOwnersComponent },
  { path: 'admin_profile/ships', component: ShipsComponent },
  { path: 'admin_profile/ship_owners', component: ShipOwnersComponent },
  { path: 'admin_profile/adventures', component: AdventuresComponent },
  { path: 'admin_profile/instructors', component: FishingInstructorsComponent },
  { path: 'admin_profile/clients', component: ClientsComponent },
  { path: 'account-info', component: AccountInfoComponent },
  { path: 'account-info-edit', component: AccountInfoEditComponent },
  { path: 'register/verify/:token', component: VerifyAccountComponent },
  { path: 'instructor-adventures/:instructorId', component: InstructorAdventuresComponent },
  { path: 'client_profile/cottage-reservations', component: CottageReservationsComponent },
  { path: 'client_profile/adventure-reservations', component: AdventureReservationsComponent },
  { path: 'client_profile/ship-reservations', component: ShipReservationsComponent },
  { path: 'client_profile/cottage-complaint/:cottageId', component: CottageComplaintComponent },
  { path: 'cottage-complaint/:cottageId', component: CottageComplaintComponent },
  { path: 'reservation_history', component: HistoryPageComponent },
  { path: 'cottage-review/:cottageId', component: CottageReviewComponent },
  { path: 'ship-review/:shipId', component: ShipReviewComponent },
  { path: 'adventure-review/:adventureId', component: AdventureReviewComponent }

];

const mapConfig: YaConfig = {
  //apikey: 'a7b572e8-718a-4325-9c8b-676375397e9e',
  apikey: 'asd',
  lang: 'en_US',
};


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
    VerifyAccountComponent,
    InstructorAdventuresComponent,
    AddShipComponent,
    ShipPageComponent,
    EditOptionsComponent,
    EditNavigationEquipmentComponent,
    EditFishingEquipmentComponent,
    CottageReservationsComponent,
    MapsComponent,
    EditImageComponent,
    CottageReservationComponent,
    CottageReservationsComponent,
    ShipReservationComponent,
    ShipReservationsComponent,
    AdventureReservationsComponent,
    AdventureReservationComponent,
    MapsComponent,
    EditImageComponent,
    CottageComplaintComponent,
    DeleteaccountComponent,
    DeleteaccountsComponent,
    ShipComplaintComponent,
    InstructorComplaintComponent,
    CottageComplaintComponent,
    EditAvailabilityPeriodComponent,
    AddSuperDealComponent,
    CalendarComponent,
    LineChartComponent,
    CottageReviewComponent,
    AdventureReviewComponent,
    ShipReviewComponent,
    HistoryPageComponent,
    ReservationDetailComponent,
    DateRangeComponent,
    AddReservationComponent
  ],
  imports: [
    [AngularYandexMapsModule.forRoot(mapConfig)],
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    NgApexchartsModule,
    MatSelectModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatInputModule
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
