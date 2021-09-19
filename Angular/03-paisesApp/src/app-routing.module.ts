import { NgModule } from "@angular/core";import { RouterModule, Routes } from "@angular/router";
import { PorPaislComponent } from './app/pais/pages/por-paisl/por-paisl.component';
import { PorRegionComponent } from './app/pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './app/pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './app/pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
    path: '',
    component: PorPaislComponent,
    pathMatch: 'full'
},{
    path: 'region',
    component: PorRegionComponent,
},
{
    path: 'capital',
    component: PorCapitalComponent,
},
{   
        path: 'pais/:codigoPais',
        component: VerPaisComponent,
},
{
    path : "**",
    redirectTo: ''
    //O se redirige a error 404 error
}
    
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule

    ]
})


export class AppRoutingModule{

}