import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaislComponent } from './pages/por-paisl/por-paisl.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { InputSearchComponent } from './components/input-search/input-search.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaislComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    InputSearchComponent
  ],
  exports:[
    PorCapitalComponent,
    PorPaislComponent,
    PorRegionComponent,
    VerPaisComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
