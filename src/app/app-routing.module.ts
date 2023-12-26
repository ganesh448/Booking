import { NgModule } from '@angular/core';
import { AllusersComponent } from './allusers/allusers.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AllLoginUsersComponent } from './all-login-users/all-login-users.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UpdateLoginComponent } from './update-login/update-login.component';
import { DeleteUserLoginComponent } from './delete-user-login/delete-user-login.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsListComponent } from './booking-details-list/booking-details-list.component';
import { BookingpostComponent } from './bookingpost/bookingpost.component';
import { BookingDetalsDeleteComponentComponent } from './BookingDetalsDelete/booking-detals-delete-component.component';
import { BookingdashboardComponent } from './bookingdashboard/bookingdashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketPostComponent } from './ticket-post/ticket-post.component';
import { CreateTrainComponentComponent } from './create-train-component/create-train-component.component';
import { TrainlistComponent } from './trainlist/trainlist.component';
import { UpdatetraincomponentComponent } from './updatetraincomponent/updatetraincomponent.component';
import { TrainDashboardComponent } from './train-dashboard/train-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { TicketGeneratorComponentComponent } from './ticket-generator-component/ticket-generator-component.component';

const routes: Routes = [
  { path: 'dashboard', component: UserdashboardComponent },
  { path: 'allusers', component: AllusersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'deleteuser/:id', component: DeleteUserComponent },
  { path: 'updateuser/:id', component: UpdateUserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'user/:email', component: UserDetailComponent },
  { path: 'all', component: AllLoginUsersComponent },
  { path: 'update/:email', component: UpdateLoginComponent },
  { path: 'deleteuserlogin/:email', component: DeleteUserLoginComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking-details-get', component: BookingDetailsListComponent },
  { path: 'booking-details-post', component: BookingpostComponent },
  { path: 'bookingdashboard', component: BookingdashboardComponent },
  {
    path: 'booking-details-delete',
    component: BookingDetalsDeleteComponentComponent,
  },
  { path: 'ticket', component: TicketComponent },
  { path: 'ticket-post', component: TicketPostComponent },
  { path: 'create-train', component: CreateTrainComponentComponent },
  { path: 'get-train', component: TrainlistComponent },
  { path: 'update-train/:id', component: UpdatetraincomponentComponent },
  { path: 'TrainDashboard', component: TrainDashboardComponent },
  { path: 'Home', component: HomeComponent },
  {
    path: 'ticket-generator/:userId',
    component: TicketGeneratorComponentComponent,
  },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'Admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
