import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { RecipesDashboardComponent } from './components/recipes-dashboard/recipes-dashboard.component';
import { RecipesCardComponent } from './components/recipes-card/recipes-card.component';
import { AddRecipeToPlanModalComponent } from './components/add-recipe-to-plan-modal/add-recipe-to-plan-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainSectionComponent,
    CreatePlanModalComponent,
    PlanCardComponent,
    LogInComponent,
    HomePageComponent,
    MainDashboardComponent,
    RecipesDashboardComponent,
    RecipesCardComponent,
    AddRecipeToPlanModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    MatProgressSpinnerModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
