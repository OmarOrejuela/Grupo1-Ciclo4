import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuComponent } from './components/menu/menu.component'
import { InicioComponent } from './components/inicio/inicio.component'
import { LoginComponent } from './components/login/login.component'
import { ComidaComponent } from './components/comida/comida.component'
import { PaisComponent } from './components/pais/pais.component'
import { RegionComponent } from './components/region/region.component'
import { SitioComponent } from './components/sitio/sitio.component'
import { DepartamentoComponent } from './components/departamento/departamento.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { LstpaisComponent } from './components/pais/lstpais/lstpais.component'
import { FrmpaisComponent } from './components/pais/frmpais/frmpais.component'
import { LstsitioComponent } from './components/sitio/lstsitio/lstsitio.component'
import { FrmsitioComponent } from './components/sitio/frmsitio/frmsitio.component'
import { LstregionComponent } from './components/region/lstregion/lstregion.component'
import { FrmregionComponent } from './components/region/frmregion/frmregion.component'
import { LstdepartamentoComponent } from './components/departamento/lstdepartamento/lstdepartamento.component'
import { FrmdepartamentoComponent } from './components/departamento/frmdepartamento/frmdepartamento.component'
import { FrmcomidaComponent } from './components/comida/frmcomida/frmcomida.component'
import { LstcomidaComponent } from './components/comida/lstcomida/lstcomida.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    LoginComponent,
    ComidaComponent,
    PaisComponent,
    RegionComponent,
    SitioComponent,
    DepartamentoComponent,
    WelcomeComponent,
    LstpaisComponent,
    FrmpaisComponent,
    LstsitioComponent,
    FrmsitioComponent,
    LstregionComponent,
    FrmregionComponent,
    LstdepartamentoComponent,
    FrmdepartamentoComponent,
    FrmcomidaComponent,
    LstcomidaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
