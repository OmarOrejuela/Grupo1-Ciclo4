import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'Grupo1-Ciclo4/FrontEnd/turisapp/src/app/components/inicio/inicio.component';
import { LoginComponent } from 'Grupo1-Ciclo4/FrontEnd/turisapp/src/app/components/inicio/inicio.component'

const routes: Routes = [
  {path: 'autenticacion', component:LoginComponent},
  {path: 'inicio', component:InicioComponent},
  {path:'', pathMatch:'full', redirectTo:'autenticacion'},
  {path:'**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
