import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrouselComponent } from './crousel/crousel.component';



@NgModule({
  declarations: [
    CrouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CrouselComponent]

})
export class FeaturedModuleModule { }
