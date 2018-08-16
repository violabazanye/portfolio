import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DevWorkComponent } from './dev-work/dev-work.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ChefbotCaseComponent } from './chefbot-case/chefbot-case.component';
import { TbcComponent } from './tbc/tbc.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'dev-work', component: DevWorkComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'chefbot-case', component: ChefbotCaseComponent },
  { path: 'the-broker-connection', component: TbcComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
