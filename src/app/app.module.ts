import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperarpasswordComponent } from './recuperarpassword/recuperarpassword.component';
import { NovapasswordComponent } from './novapassword/novapassword.component';
import { PasswordalteradaComponent } from './passwordalterada/passwordalterada.component';
import { MensagemenviadaComponent } from './mensagemenviada/mensagemenviada.component';
import { MenugeralComponent } from './menugeral/menugeral.component';
import { MenugestaoComponent } from './menugestao/menugestao.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DashboardprincipalComponent } from './dashboardprincipal/dashboardprincipal.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { MontraprodutosComponent } from './montraprodutos/montraprodutos.component';
import { MontraservicosComponent } from './montraservicos/montraservicos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardgestaoComponent } from './dashboardgestao/dashboardgestao.component';
import { GestaoutilizadoresComponent } from './gestaoutilizadores/gestaoutilizadores.component';
import { DashboardprodutosComponent } from './dashboardprodutos/dashboardprodutos.component';
import { DashboardclientesComponent } from './dashboardclientes/dashboardclientes.component';
import { DashboardfornecedoresComponent } from './dashboardfornecedores/dashboardfornecedores.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarpasswordComponent,
    NovapasswordComponent,
    PasswordalteradaComponent,
    MensagemenviadaComponent,
    MenugeralComponent,
    MenugestaoComponent,
    RodapeComponent,
    DashboardprincipalComponent,
    QuemsomosComponent,
    MontraprodutosComponent,
    MontraservicosComponent,
    ContactosComponent,
    PerfilComponent,
    DashboardgestaoComponent,
    GestaoutilizadoresComponent,
    DashboardprodutosComponent,
    DashboardclientesComponent,
    DashboardfornecedoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
