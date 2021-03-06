import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDriversComponent } from './views/all-drivers/all-drivers.component';
import { AllRidesComponent } from './views/all-rides/all-rides.component';
import { AllUsersComponent } from './views/all-users/all-users.component';
import { DiscountAreasComponent } from './views/discount-areas/discount-areas.component';
import { DriverLoginComponent } from './views/driver-login/driver-login.component';
import { DriverProfielComponent } from './views/driver-profiel/driver-profiel.component';
import { FavDriverAreasComponent } from './views/fav-driver-areas/fav-driver-areas.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RateComponent } from './views/rate/rate.component';
import { RequestRideComponent } from './views/request-ride/request-ride.component';
import { RidesOfDriverComponent } from './views/rides-of-driver/rides-of-driver.component';
import { ShowRatingComponent } from './views/show-rating/show-rating.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { UdriversComponent } from './views/udrivers/udrivers.component';
import { UpdateRideComponent } from './views/update-ride/update-ride.component';
import { UserRidesComponent } from './views/user-rides/user-rides.component';
import { VerifyDriversComponent } from './views/verify-drivers/verify-drivers.component';
import { DriverRidesComponent } from './views/driver-requests/view-rides.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'profile',component:ProfileComponent},
  {path:'udrivers',component:UdriversComponent},
  {path:'udrate/:id',component:RateComponent},
  {path:'logindriver',component:DriverLoginComponent},
  {path:'alldrivers',component:AllDriversComponent},
  {path:'allRides',component:AllRidesComponent},
  {path:'verifyDriver/:id',component:VerifyDriversComponent},
  {path:'allUsers',component:AllUsersComponent},
  {path:'driverProfile',component:DriverProfielComponent},
  {path:'driversRating',component:ShowRatingComponent},
  {path:'requestRide',component:RequestRideComponent},
  {path:'favoriteAreas',component:FavDriverAreasComponent},
  {path:'viewRides',component:DriverRidesComponent},
  {path:'updateRide/:id',component:UpdateRideComponent},
  {path:'userRides',component:UserRidesComponent},
  {path:'discountAreas',component:DiscountAreasComponent},
  {path:'driverRides',component:RidesOfDriverComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
