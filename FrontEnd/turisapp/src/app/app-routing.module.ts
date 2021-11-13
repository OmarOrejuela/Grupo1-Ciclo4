import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidaComponent } from './components/comida/comida.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { FrmpaisComponent } from './components/pais/frmpais/frmpais.component';
import { LstpaisComponent } from './components/pais/lstpais/lstpais.component';
import { PaisComponent } from './components/pais/pais.component';
import { RegionComponent } from './components/region/region.component';
import { SitioComponent } from './components/sitio/sitio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'autenticacion', component:LoginComponent},
  {path: 'inicio', component:InicioComponent,
    children:[
      {path:'welcome', component:WelcomeComponent},
      {path:'sitio', component:SitioComponent},
      {path:'region', component:RegionComponent},
      {path:'pais', component:PaisComponent,
        children:[
          {path:'registropais', component:FrmpaisComponent},
          {path:'verpais', component:LstpaisComponent}
        ]},
      {path:'comida', component:ComidaComponent},
      {path:'departamento', component:DepartamentoComponent},
      {path:'**', pathMatch:'full', redirectTo:'welcome'}
    ]},
  {path:'', pathMatch:'full', redirectTo:'autenticacion '},
  {path:'**', pathMatch:'full', redirectTo:'autenticacion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
