import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ChefbotCaseComponent } from './chefbot-case/chefbot-case.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'prototypes', component: PrototypesComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'chefbot-case', component: ChefbotCaseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
