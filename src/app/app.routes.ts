import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from  './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LifeInsurancePlansComponent } from './pages/life-insurance-plans/life-insurance-plans.component';
import { HealthInsurancePlansComponent } from './pages/health-insurance-plans/health-insurance-plans.component';
import { TravelInsurancePlansComponent } from './pages/travel-insurance-plans/travel-insurance-plans.component';
import { HomePropertyPlansComponent } from './pages/home-property-plans/home-property-plans.component';
import { SavingsInvestmentPlansComponent } from './pages/savings-investment-plans/savings-investment-plans.component';
import { VehicleInsurancePlansComponent } from './pages/vehicle-insurance-plans/vehicle-insurance-plans.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/life-insurance', component: LifeInsurancePlansComponent },
  { path: 'services/health-insurance', component: HealthInsurancePlansComponent },
  { path: 'services/travel-insurance', component: TravelInsurancePlansComponent },
  { path: 'services/home-property', component: HomePropertyPlansComponent },
  { path: 'services/savings-investment', component: SavingsInvestmentPlansComponent },
  { path: 'services/vehicle-insurance', component: VehicleInsurancePlansComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];