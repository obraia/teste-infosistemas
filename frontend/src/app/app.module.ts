import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InfoVeiculoComponent } from './shared/info-veiculo/info-veiculo.component'
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListaVeiculosComponent } from './shared/lista-veiculos/lista-veiculos.component';
import { AdicionarVeiculoComponent } from './shared/adicionar-veiculo/adicionar-veiculo.component';
import { EditarVeiculoComponent } from './shared/editar-veiculo/editar-veiculo.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgxMaskModule, IConfig } from 'ngx-mask';
 
const maskConfig: Partial<IConfig> = {
  validation: false,
};
 

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListaVeiculosComponent,
    AdicionarVeiculoComponent,
    EditarVeiculoComponent,
    InfoVeiculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
