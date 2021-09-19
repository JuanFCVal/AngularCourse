import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaislComponent } from './pages/por-paisl/por-paisl.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaislComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports:[
    PorCapitalComponent,
    PorPaislComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
