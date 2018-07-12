import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PrototypesComponent } from './prototypes/prototypes.component';
import { AboutComponent } from './about/about.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ChefbotCaseComponent } from './chefbot-case/chefbot-case.component';
import { TbcComponent } from './tbc/tbc.component';


@NgModule({
  declarations: [
    AppComponent,
    PrototypesComponent,
    AboutComponent,
    CaseStudiesComponent,
    ChefbotCaseComponent,
    TbcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
