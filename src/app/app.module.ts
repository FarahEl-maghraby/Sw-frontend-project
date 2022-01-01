import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { UdriversComponent } from './views/udrivers/udrivers.component';
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RateComponent } from './views/rate/rate.component';
import { DriverLoginComponent } from './views/driver-login/driver-login.component';
import { AllDriversComponent } from './views/all-drivers/all-drivers.component';
import { VerifyDriversComponent } from './views/verify-drivers/verify-drivers.component';
import { AllUsersComponent } from './views/all-users/all-users.component';
import { DriverProfielComponent } from './views/driver-profiel/driver-profiel.component';
import { ShowRatingComponent } from './views/show-rating/show-rating.component';
import { RequestRideComponent } from './views/request-ride/request-ride.component';
import { CountriesService } from './services/countries.service';
import { FavDriverAreasComponent } from './views/fav-driver-areas/fav-driver-areas.component';
import { DriverRidesComponent } from './views/driver-requests/view-rides.component';
import { UpdateRideComponent } from './views/update-ride/update-ride.component';
import { UserRidesComponent } from './views/user-rides/user-rides.component';
import { DriversService } from './services/drivers.service';
import { AdminService } from './services/admin.service';
import { RidesService } from './services/rides.service';
import { AllRidesComponent } from './views/all-rides/all-rides.component';
import { DiscountAreasComponent } from './views/discount-areas/discount-areas.component';
import { DiscountService } from './services/discount.service';
import { RidesOfDriverComponent } from './views/rides-of-driver/rides-of-driver.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    UdriversComponent,
    RateComponent,
    DriverLoginComponent,
    AllDriversComponent,
    VerifyDriversComponent,
    AllUsersComponent,
    DriverProfielComponent,
    ShowRatingComponent,
    RequestRideComponent,
    FavDriverAreasComponent,
    DriverRidesComponent,
    UpdateRideComponent,
    UserRidesComponent,
    AllRidesComponent,
    DiscountAreasComponent,
    DriverRidesComponent,
    RidesOfDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    DriversService,
    AdminService,
    RidesService,
    UdriversComponent,
    CountriesService,
    DiscountService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
