import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ComidaComponent } from './components/comida/comida.component';
import { PaisComponent } from './components/pais/pais.component';
import { RegionComponent } from './components/region/region.component';
import { SitioComponent } from './components/sitio/sitio.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LstpaisComponent } from './components/pais/lstpais/lstpais.component';
import { FrmpaisComponent } from './components/pais/frmpais/frmpais.component';

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
    FrmpaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
