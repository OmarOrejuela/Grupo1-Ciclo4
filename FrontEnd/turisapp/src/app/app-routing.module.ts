import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { InicioComponent } from './components/inicio/inicio.component'
import { SitioComponent } from './components/sitio/sitio.component'
import { RegionComponent } from './components/region/region.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { ComidaComponent } from './components/comida/comida.component'
import { DepartamentoComponent } from './components/departamento/departamento.component'
import { FrmpaisComponent } from './components/pais/frmpais/frmpais.component'
import { LstpaisComponent } from './components/pais/lstpais/lstpais.component'
import { FrmsitioComponent } from './components/sitio/frmsitio/frmsitio.component'
import { LstsitioComponent } from './components/sitio/lstsitio/lstsitio.component'
import { FrmcomidaComponent } from './components/comida/frmcomida/frmcomida.component'
import { LstcomidaComponent } from './components/comida/lstcomida/lstcomida.component'
import { FrmregionComponent } from './components/region/frmregion/frmregion.component'
import { LstregionComponent } from './components/region/lstregion/lstregion.component'
import { FrmdepartamentoComponent } from './components/departamento/frmdepartamento/frmdepartamento.component'
import { LstdepartamentoComponent } from './components/departamento/lstdepartamento/lstdepartamento.component'
import { PaisComponent } from './components/pais/pais.component'

const routes: Routes = [
  { path: 'autenticacion', component: LoginComponent },
  {
    path: 'inicio',
    component: InicioComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'sitio',
        component: SitioComponent,
        children: [
          { path: 'registrositio', component: FrmsitioComponent },
          { path: 'versitio', component: LstsitioComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
        ],
      },
      {
        path: 'region',
        component: RegionComponent,
        children: [
          { path: 'registroregion', component: FrmregionComponent },
          { path: 'verregion', component: LstregionComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
        ],
      },
      {
        path: 'pais',
        component: PaisComponent,
        children: [
          { path: 'registropais', component: FrmpaisComponent },
          { path: 'verpais', component: LstpaisComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
        ],
      },
      {
        path: 'comida',
        component: ComidaComponent,
        children: [
          { path: 'registrocomida', component: FrmcomidaComponent },
          { path: 'vercomida', component: LstcomidaComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
        ],
      },
      {
        path: 'departamento',
        component: DepartamentoComponent,
        children: [
          { path: 'registrodepartamento', component: FrmdepartamentoComponent },
          { path: 'verdepartamento', component: LstdepartamentoComponent },
          { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
        ],
      },
      { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'autenticacion' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
