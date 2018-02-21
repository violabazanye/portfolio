import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrototypesComponent } from './prototypes/prototypes.component';

const routes: Routes = [
  { path: 'prototypes', component: PrototypesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
