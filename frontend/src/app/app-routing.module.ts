import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoVeiculoComponent } from './shared/info-veiculo/info-veiculo.component'
import { ListaVeiculosComponent } from './shared/lista-veiculos/lista-veiculos.component';
import { AdicionarVeiculoComponent } from './shared/adicionar-veiculo/adicionar-veiculo.component';
import { EditarVeiculoComponent } from './shared/editar-veiculo/editar-veiculo.component';

const routes: Routes = [
  {path: 'info-veiculo', component: InfoVeiculoComponent},
  {path: 'lista-veiculos', component: ListaVeiculosComponent},
  {path: 'adicionar-veiculo', component: AdicionarVeiculoComponent},
  {path: 'editar-veiculo', component: EditarVeiculoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
