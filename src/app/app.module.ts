import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Devemos importar a biblioteca HttpClientModule para o funcionamento do nosso serviço
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { RouterModule } from '@angular/router';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

//Biblioteca responsavel pelo funcionamento das rotas de navegação do site
import { AppRoutingModule } from './app-routing/app-routing.module';

//Biblioteca responsavel pelo funcionamento do ngModel do formulario
import { FormsModule } from '@angular/forms';
import { EditarVagasComponent } from './editar-vagas/editar-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent,
    PainelVagasComponent,
    MenuComponent,
    RodapeComponent,
    EditarVagasComponent,
  ],
    /*Devemos inserir o nome da biblioteca importada em nossas importações/imports
    para que o serviço entenda que importamos tal biblioteca e que ela sera utilizada
    em nossos serviços*/
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
