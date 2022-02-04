import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';


@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  //Atributo publico que está sendo inicializado com a array de Vaga vazia 
  public vagas: Vaga[] = [];
  public vaga: Vaga = new Vaga(0,"","","",0);

  //Será responsavel por exibir os dados do JSON que dependerá dos serviços do arquivo (vagas.service.ts)
  constructor(private _vagasService: VagasService) { }

  //Este comando ngOnInit é responsavel pela inicialização quando o arquivo em questão for chamado
  //Então oque estiver dentro dele é oq será inicializado
  ngOnInit(): void {
    //Chama o metodo para ser inicializado
    this.listarVagas();
  }

  //Metodo que fará as vagas serem listadas
  listarVagas(){
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
    );
    // this - Para fazer referencia ao proprio objeto em questão
    // _vagasService - Chama nosso VagaService que faz referencia ao arquivo (vagas.service.ts)
    // getVagas() - Atributo responsavel por pegar os dados que estão salvos na API (vags-db.json)
    /* .subscribe() - Necessario para o funcionamento do Observable,
    responsavel por sobrescrever as infromações do Observable em nosso vetor (Vaga[])*/
    // retornaVaga - Variavel responsavel por receber a primeira função
    // => - ArrowFunction (Simplifica o comando de função)
    /* this.vagas - Está se referenciando ao objeto vagas localizado no arquivo (vagas-db.json),
    tambem receberá a função para o mapeamento do vetor*/
    /* retornaVaga.map = Está sendo responsavel pelo mapeamento do vetor
    para que possemos ter acesso aos seus itens*/
    // item - Variavel responsavel por receber a segunda função
    // => - ArrowFunction (Simplifica o comando de função)
    // return - Responsavel por retornar o novo objeto Vaga
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

}
