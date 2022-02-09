import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"shared",
   loadChildren:()=>import('./../shared/shared.module').then(module=>module.SharedModule)
  }
];


@NgModule({
  declarations: [FooterComponent,HeaderComponent],
  imports: [
    CommonModule,SharedModule,RouterModule.forRoot(routes)
  ],
  exports:[
    HeaderComponent,FooterComponent,RouterModule
  ]
})
export class CoreModule { }
