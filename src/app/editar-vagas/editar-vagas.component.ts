import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-editar-vagas',
  templateUrl: './editar-vagas.component.html',
  styleUrls: ['./editar-vagas.component.css']
})
export class EditarVagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  public vaga: Vaga = new Vaga(0,"","","",0);


  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {

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

}
