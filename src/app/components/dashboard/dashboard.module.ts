import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CountToModule } from 'angular-count-to';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../shared/shared.module";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { Limitedpartner01Component} from './limitedPartner01/limitedpartner01.component';
import { Limitedpartner02Component} from './limitedpartner02/limitedpartner02.component';
import { Limitedpartner03Component} from './limitedpartner03/limitedpartner03.component';
import { Limitedpartner04Component} from './limitedpartner04/limitedpartner04.component';

import { Limitedpartner05Component} from './limitedpartner05/limitedpartner05.component';
import { Limitedpartner06Component} from './limitedpartner06/limitedpartner06.component';
import { Limitedpartner07Component} from './limitedpartner07/limitedpartner07.component';
import { Limitedpartner08Component} from './limitedpartner08/limitedpartner08.component';
import { Limitedpartner09Component} from './limitedpartner09/limitedpartner09.component';
import { Limitedpartner10Component} from './limitedpartner10/limitedpartner10.component';
import { Limitedpartner11Component} from './limitedpartner11/limitedpartner11.component';
import { Limitedpartner12Component} from './limitedpartner12/limitedpartner12.component';
import { Limitedpartner13Component} from './limitedpartner13/limitedpartner13.component';
import { Limitedpartner14Component} from './limitedpartner14/limitedpartner14.component';
import { Limitedpartner15Component} from './limitedpartner15/limitedpartner15.component';



import { Limitedpartner16Component} from './limitedpartner16/limitedpartner16.component';
import { Limitedpartner17Component} from './limitedpartner17/limitedpartner17.component';
import { Limitedpartner18Component} from './limitedpartner18/limitedpartner18.component';
import { Limitedpartner19Component} from './limitedpartner19/limitedpartner19.component';
import { Limitedpartner20Component} from './limitedpartner20/limitedpartner20.component';
import { Limitedpartner21Component} from './limitedpartner21/limitedpartner21.component';
import { Limitedpartner22Component} from './limitedpartner22/limitedpartner22.component';
import { Limitedpartner23Component} from './limitedpartner23/limitedpartner23.component';
import { Limitedpartner24Component} from './limitedpartner24/limitedpartner24.component';
import { Limitedpartner25Component} from './limitedpartner25/limitedpartner25.component';


// import { LP01Q12020Component} from './LP01Q12020/LP01Q12020.component';
// import { LP01Q32020Component} from './LP01Q22020/LP01Q22020.component';
// import { LP01Q22020Component} from './LP01Q32020/LP01Q32020.component';
// import { LP01Q42020Component} from './LP01Q42020/LP01Q420202.component';

// import { LP02Q1Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP02Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP02Q3Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP02Q4Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP03Q1Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP03Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP03Q3Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP03Q4Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP04Q1Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP04Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP04Q3Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP04Q4Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP05Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP06Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP07Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP08Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP09Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP10Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP112Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP112Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP11Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP11Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP12Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP13Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP14Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP15Q2Component} from './LP01Q2-2020/LP01Q2.component';



// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP16Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP17Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP18Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP19Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP20Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP21Q2Component} from './LP01Q2-2020/LP01Q2.component';


// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP22Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP23Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP24Q2Component} from './LP01Q2-2020/LP01Q2.component';

// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';
// import { LP25Q2Component} from './LP01Q2-2020/LP01Q2.component';



// import { LP01Q2Component} from './LP01Q2-2020/LP01Q2.component';

import { Uploadcomponent} from './upload/upload.component';
// import { LP01Q12020Component} from './LP01Q12020/LP01Q12020.component';

// import { LP01Q22020Component} from './LP01Q22020/LP01Q22020.component';

// import { LP01Q32020Component} from './LP01Q32020/LP01Q32020.component';

import { LP01Q12020Component} from './LP01Q12020/LP01Q12020.component';

import { LP01Q22020Component} from './LP01Q22020/LP01Q22020.component';

import { LP01Q32020Component} from './LP01Q32020/LP01Q32020.component';

import { LP01Q42020Component} from './LP01Q42020/LP01Q42020.component';

import { LP02Q12020Component} from './LP02Q12020/LP02Q12020.component';

import { LP02Q22020Component} from './LP02Q22020/LP02Q22020.component';

import { LP02Q32020Component} from './LP02Q32020/LP02Q32020.component';

import { LP02Q42020Component} from './LP02Q42020/LP02Q42020.component';
import { LP03Q12020Component} from './LP03Q12020/LP03Q12020.component';
import { LP03Q22020Component} from './LP03Q22020/LP03Q22020.component';
import { LP03Q32020Component} from './LP03Q32020/LP03Q32020.component';
import { LP03Q42020Component} from './LP03Q42020/LP03Q42020.component';


import { LP04Q12020Component} from './LP04Q12020/LP04Q12020.component';
import { LP04Q22020Component} from './LP04Q22020/LP04Q22020.component';
import { LP04Q32020Component} from './LP04Q32020/LP04Q32020.component';
import { LP04Q42020Component} from './LP04Q42020/LP04Q42020.component';
import { LP05Q12020Component} from './LP05Q12020/LP05Q12020.component';
import { LP05Q22020Component} from './LP05Q22020/LP05Q22020.component';
import { LP05Q32020Component} from './LP05Q32020/LP05Q32020.component';
import { LP05Q42020Component} from './LP05Q42020/LP05Q42020.component';

import {Upload01Q12020component} from './upload01Q12020/upload01Q12020.component';
import {Upload01Q22020component} from './upload01Q22020/upload01Q22020.component';
import {Upload01Q32020component} from './upload01Q32020/upload01Q32020.component';
import {Upload01Q42020component} from './upload01Q42020/upload01Q42020.component';

import {Upload02Q12020component} from './upload02Q12020/upload02Q12020.component';
import {Upload02Q22020component} from './upload02Q22020/upload02Q22020.component';
import {Upload02Q32020component} from './upload02Q32020/upload02Q32020.component';

import {Upload02Q42020component} from './upload02Q42020/upload02Q42020.component';
import {Upload03Q12020component} from './upload03Q1020/upload03Q12020.component';
import {Upload03Q22020component} from './upload03Q22020/upload03Q22020.component';
import {Upload03Q32020component} from './upload03Q32020/upload03Q32020.component';
import {Upload03Q42020component} from './upload03Q42020/upload03Q42020.component';
import {Upload04Q12020component} from './upload04Q12020/upload04Q12020.component';
import {Upload04Q22020component} from './upload04Q22020/upload04Q22020.component';
import {Upload04Q32020component} from './upload04Q32020/upload04Q32020.component';
import {Upload04Q42020component} from './upload04Q42020/upload04Q42020.component';


import {Upload05Q12020component} from './upload05Q12020/upload05Q12020.component';
import {Upload05Q22020component} from './upload05Q22020/upload05Q22020.component';
import {Upload05Q32020component} from './upload05Q32020/upload05Q32020.component';
import {Upload05Q42020component} from './upload05Q42020/upload05Q42020.component';

import {Upload01newsletterComponent} from './upload01newsletter/upload01newsletter.component';
import {Upload02newslettercomponent} from './upload02newsletter/upload02newsletter.component';
import {Upload03newslettercomponent} from './upload03newsletter/upload03newsletter.component';
import {Upload04newslettercomponent} from './upload04newsletter/upload04newsletter.component';
import {Upload05newslettercomponent} from './upload05newsletter/upload05newsletter.component';

import { LP01newsletterComponent} from './lp01newsletter/lp01newsletter.component';
import { LP02newsletterComponent} from './lp02newsletter/lp02newsletter.component';
import { LP03newsletterComponent} from './lp03newsletter/lp03newsletter.component';
import { LP04newsletterComponent} from './lp04newsletter/lp04newsletter.component';
import { LP05newsletterComponent} from './lp05newsletter/lp05newsletter.component';
import { Welcomecomponent} from './welcome/welcome.component';

@NgModule({
  declarations: [
    DefaultComponent, 
    Welcomecomponent,
    ECommerceComponent, 
    UniversityComponent, 
    BitcoinComponent, 
    ServerComponent, 
    ProjectComponent,
    Limitedpartner01Component,
    Limitedpartner02Component,
    Limitedpartner03Component,
    Limitedpartner04Component,
    Limitedpartner05Component,
    Limitedpartner06Component,
    Limitedpartner07Component,
    Limitedpartner08Component,
    Limitedpartner09Component,
    Limitedpartner10Component,
    Limitedpartner11Component,
    Limitedpartner12Component,
    Limitedpartner13Component,
    Limitedpartner14Component,

    Uploadcomponent,
    LP01Q12020Component,
    LP01Q22020Component,
    LP01Q32020Component,
    LP01Q42020Component,
    LP02Q12020Component,
    LP02Q22020Component,
    LP02Q32020Component,
    LP02Q42020Component,
    LP03Q12020Component,
    LP03Q22020Component,
    LP03Q32020Component,
    LP03Q42020Component,
    LP04Q12020Component,
    LP04Q22020Component,
    LP04Q32020Component,
    LP04Q42020Component,
    LP05Q12020Component,
    LP05Q22020Component,
    LP05Q32020Component,
    LP05Q42020Component,

    LP01newsletterComponent,
    LP02newsletterComponent,
    LP03newsletterComponent,
    LP04newsletterComponent,
    LP05newsletterComponent,


    Upload01newsletterComponent,
    Upload02newslettercomponent,
    Upload03newslettercomponent,
    Upload04newslettercomponent,
    Upload05newslettercomponent,


    Upload01Q12020component,
    Upload01Q22020component,
    Upload01Q32020component,
    Upload01Q42020component,
    Upload02Q12020component,
    Upload02Q22020component,
    Upload02Q32020component,
    Upload02Q42020component,

    Upload03Q12020component,
    Upload03Q22020component,
    Upload03Q32020component,
    Upload03Q42020component,


   Upload04Q12020component,
    Upload04Q22020component,
    Upload04Q32020component,
    Upload04Q42020component,


    Upload05Q12020component,
    Upload05Q22020component,
    Upload05Q32020component,
    Upload05Q42020component,
  

  ],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    ChartistModule,
    ChartsModule,
    CountToModule,
    DashboardRoutingModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class DashboardModule { }
