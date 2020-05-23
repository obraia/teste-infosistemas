import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/home/home.component'
import { InfoVeiculoComponent } from './shared/info-veiculo/info-veiculo.component'
import { ListaVeiculosComponent } from './shared/lista-veiculos/lista-veiculos.component';
import { AdicionarVeiculoComponent } from './shared/adicionar-veiculo/adicionar-veiculo.component';
import { EditarVeiculoComponent } from './shared/editar-veiculo/editar-veiculo.component';
import { SobreComponent } from './shared/sobre/sobre.component';



import { LimboComponent } from './shared/limbo/limbo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info-veiculo', component: InfoVeiculoComponent },
  { path: 'lista-veiculos', component: ListaVeiculosComponent },
  { path: 'adicionar-veiculo', component: AdicionarVeiculoComponent },
  { path: 'editar-veiculo', component: EditarVeiculoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'limbo', component: LimboComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
