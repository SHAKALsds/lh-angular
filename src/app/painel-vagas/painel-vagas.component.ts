import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);
  //public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    //Chama o metodo para ser inicializado
    //this.listarVagas();
  }

  //Metodo cadastrar 
  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      /*Informa para o objeto que após o cadastro de uma nova vaga,
       ele deve instanciar um novo objeto vazio do tipo vaga*/
      vaga => {this.vaga = new Vaga(0,"","","",0)},

      //err - Responsavel por eviar uma messagem caso exista algum erro ao cadasatrar uma nova vaga
      err => {console.log("erro ao cadastrar")}
    );

    //Responsavel por enviar o usuario para a pagina mural após o metedo cadastro ser executado
    window.location.href = "/mural";
  }

  //Metodo atualizar, recebe por parametro o argumento id do tipo number
  atualizar(id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      
      /*Informa para o objeto que após a atualização da vaga,
       ele deve instanciar um novo objeto vazio do tipo vaga*/
      vaga => {this.vaga = new Vaga(0,"","","",0)},

      //err - Responsavel por eviar uma messagem caso exista algum erro ao atualizar a vaga
      err => {console.log("erro ao atualizar")}
    );

    //Responsavel por enviar o usuario para a pagina mural após o metedo atualizar ser executado
    window.location.href = "/mural"
  }

  //Metodo excluir, recebe por parametro o argumento id do tipo number
  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      
      /*Informa para o objeto que após a exclusão da vaga,
      ele deve instanciar um novo objeto vazio do tipo vaga*/
      vaga => {this.vaga = new Vaga(0,"","","",0)},

      //err - Responsavel por eviar uma messagem caso exista algum erro ao excluir a vaga
      err => {console.log("erro ao excluir")}
    );

     //Responsavel por enviar o usuario para a pagina mural após o metedo excluir ser executado
     window.location.href = "/mural"
  }

   //Metodo que fará as vagas serem listadas, quando for "requisitada" pelo usuario
   /*listarVagas(){
    this._vagasService.getVagas()
    .subscribe(
      retornaVaga => {
        this.vagas = retornaVaga.map(
          item => {
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )
      }
    )
  }*/

}
