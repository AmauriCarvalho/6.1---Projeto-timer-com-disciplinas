import { Injectable } from '@angular/core';

interface Disci {
  title: string;
}
@Injectable()
export class DisciplinasService {
  list: Array<Disci> = [];
  constructor() {
    this.add("Topicos Especiais  em Sistemas para Internet II");
    this.add("Desenvolvimento  para Servidores II");
    this.add("Projeto de Prototipagem e Testes de Usabilidade");
    this.add("Negocios e Marketing e Eletronicos");
    this.add("Desenvolvimento para Dispositivos Moveis I");
    this.add("Ingles V");
    this.add("Projeto de Trabalho de Graduação em Sistemas para Internet I");
   }

  getList(){
    return this.list;
  }

  add(title: string){
    this.list.push({title});
  }
  
  remove(index: number){
    this.list.splice(index, 1);
  }


}