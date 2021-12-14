import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarpasswordComponent } from './recuperarpassword/recuperarpassword.component';
import { NovapasswordComponent } from './novapassword/novapassword.component';
import { MensagemenviadaComponent } from './mensagemenviada/mensagemenviada.component';
import { PasswordalteradaComponent } from './passwordalterada/passwordalterada.component';
import { DashboardprincipalComponent } from './dashboardprincipal/dashboardprincipal.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { MontraprodutosComponent } from './montraprodutos/montraprodutos.component';
import { MontraservicosComponent } from './montraservicos/montraservicos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardgestaoComponent } from './dashboardgestao/dashboardgestao.component';
import { DashboardclientesComponent } from './dashboardclientes/dashboardclientes.component';
import { DashboardfornecedoresComponent } from './dashboardfornecedores/dashboardfornecedores.component';
import { DashboardprodutosComponent } from './dashboardprodutos/dashboardprodutos.component';
import { GestaoutilizadoresComponent } from './gestaoutilizadores/gestaoutilizadores.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recuperarpassword', component: RecuperarpasswordComponent },
    { path: 'mensagemenviada', component: MensagemenviadaComponent },
    { path: 'novapassword', component: NovapasswordComponent },
    { path: 'passwordalterada', component: PasswordalteradaComponent },
    { path: 'dashboardprincipal', component: DashboardprincipalComponent},
    { path: 'quemsomos', component: QuemsomosComponent },
    { path: 'montraprodutos', component: MontraprodutosComponent },
    { path: 'montraservicos', component: MontraservicosComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'dashboardgestao', component: DashboardgestaoComponent },
    { path: 'dashboardclientes', component: DashboardclientesComponent },
    { path: 'dashboardfornecedores', component: DashboardfornecedoresComponent },
    { path: 'dashboardprodutos', component: DashboardprodutosComponent },
    { path: 'gestaoutilizadores', component: GestaoutilizadoresComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
