import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AllusersComponent } from './allusers/allusers.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AllLoginUsersComponent } from './all-login-users/all-login-users.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UpdateLoginComponent } from './update-login/update-login.component';
import { DeleteUserLoginComponent } from './delete-user-login/delete-user-login.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BookingDetailsListComponent } from './booking-details-list/booking-details-list.component';
import { BookingpostComponent } from './bookingpost/bookingpost.component';
import { BookingDetalsDeleteComponentComponent } from './BookingDetalsDelete/booking-detals-delete-component.component';
import { BookingdashboardComponent } from './bookingdashboard/bookingdashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketPostComponent } from './ticket-post/ticket-post.component';
import { TrainlistComponent } from './trainlist/trainlist.component';
import { CreateTrainComponentComponent } from './create-train-component/create-train-component.component';
import { UpdatetraincomponentComponent } from './updatetraincomponent/updatetraincomponent.component';
import { TrainDashboardComponent } from './train-dashboard/train-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { TicketGeneratorComponentComponent } from './ticket-generator-component/ticket-generator-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AllusersComponent,
    DeleteUserComponent,
    RegisterComponent,
    UserDetailComponent,
    LoginComponent,
    UpdateUserComponent,
    AllLoginUsersComponent,
    UserdashboardComponent,
    UpdateLoginComponent,
    DeleteUserLoginComponent,
    LogindetailsComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    BookingDetailsListComponent,
    BookingpostComponent,
    BookingDetalsDeleteComponentComponent,
    BookingdashboardComponent,
    TicketComponent,
    TicketPostComponent,
    TrainlistComponent,
    CreateTrainComponentComponent,
    UpdatetraincomponentComponent,
    TrainDashboardComponent,
    AdminComponent,
    TicketGeneratorComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
