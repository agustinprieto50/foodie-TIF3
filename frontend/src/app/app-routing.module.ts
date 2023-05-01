import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RecipesDashboardComponent } from './components/recipes-dashboard/recipes-dashboard.component';

const routes: Routes = [
  { path: 'home', component: MainDashboardComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'comidas', component: RecipesDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
