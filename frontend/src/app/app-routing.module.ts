import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RecipesDashboardComponent } from './components/recipes-dashboard/recipes-dashboard.component';
import { ShippingOrderComponent } from './components/shipping-order/shipping-order.component';
import { InformationPageComponent } from './components/information-page/information-page.component';


const routes: Routes = [
  { path: 'home', component: MainDashboardComponent },
  { path: 'information', component: InformationPageComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'comidas', component: RecipesDashboardComponent },
  { path: 'order', component: ShippingOrderComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
