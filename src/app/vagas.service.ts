import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vagas.model';


@Injectable({
  providedIn: 'root'
})
export class VagasService {
  
  private url = "http://localhost:3000/vagas";

  /*O serviço depende do HttpClient, 
  para buscar as informações do nosso servidor 
  através do protocolo de rede HTTP*/
  constructor(private _httpClient: HttpClient) { }

  /*Metodo que irá receber as informações inseridas nas vagas
  e um Casting para converter e dizer que o Observable irá receber 
  dados do tipo vaga que será um array*/

  /*Lembrando que quando trabalhamos com metodos que são tipados
  devemos retornar alguma coisa, diferentemente de quando usamos metodos "vazios"
  ou não tipados*/
  getVagas(): Observable<Vaga[]>{
    return this._httpClient.get<Vaga[]>(this.url);
  }
  
    /*O THIS faz referencia ao proprio objeto, atributos e metodos
    que estão no proprio objeto/clase. Seguido do ._httpClient
    que é aonde está os atributos e metodos que utilizaremos. Por fim o get<Vaga>(this.url)
    get - pega os dados
    <vaga[]> - desta array, que é o tipo de dado
    (this.url) - retornando este valor para a url*/

  //Observable - É uma classe responsavel por trazer os dados de forma assincrona
  //Sincrona - Quando recebemos os dados de forma estantanea
  //Assincrona - Tem um tempo de resposta para que os dados sejam recebidos

  /*Metodo de cadastramento de vaga
  e um Casting para converter e dizer que o Observable irá receber 
  dados do tipo vaga que será um array*/
  cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
  
    //Retorna a para a pagina com a nova vaga já cadastrada
    return this._httpClient.post<Vaga[]>(this.url,vaga);
    // post - Responsavel por "postar" a nova vaga e suas informações cadastradas na API JASON
  }

  /*Metodo de atualização da vaga,
  e um Casting para converter e dizer que o Observable irá receber 
  dados do tipo vaga que será um array*/
  atualizarVaga(id:any, vaga: Vaga):Observable<Vaga[]>{
    
    /*Varaiavel para concatenação da url com id,
    será responsavel por atualizar a vaga pelo ID da mesma*/
    const urlAtualizar = `${this.url}/${id}`;
    
    //Retorna para pagina já com a vaga atualizada
    return this._httpClient.put<Vaga[]>(urlAtualizar,vaga);
    // put - Responsavel atualizar a vaga em nossa API, utilizando o ID como identificador
  }

  /*Metodo de exclusão da vaga,
  e um Casting para converter e dizer que o Observable irá receber 
  dados do tipo vaga que será um array*/
  removerVaga(id:any):Observable<Vaga[]>{
  
    /*Varaiavel para concatenação da url com id,
    será responsavel por excluir a vaga pelo ID da mesma*/
    const urlDeletar = `${this.url}/${id}`;
  
    //Retorna para pagina já com a vaga deletada
    return this._httpClient.delete<Vaga[]>(urlDeletar);
    // delete - Responsavel por deletar a vaga na nossa API, utilizando o ID como identificador
  }

}
