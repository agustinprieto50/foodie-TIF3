import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { CreatePlanModalComponent } from './components/create-plan-modal/create-plan-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainSectionComponent,
    CreatePlanModalComponent,
    PlanCardComponent,
    LogInComponent,
    HomePageComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
