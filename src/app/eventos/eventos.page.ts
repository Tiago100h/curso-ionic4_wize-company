import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: 'eventos.page.html',
  styleUrls: ['eventos.page.scss']
})
export class EventosPage {
  data: any;
  listSkeleton: number[] = [1, 2, 3, 4, 5, 6];
  list: Object[] = [];

  constructor() {

    // TODO: obter lista de eventos

    this.list.push({
      id: 1,
      descricao: "Descrição da imagem 1",
      thumbnail: "https://ionicframework.com/docs/demos/api/card/madison.jpg"
    });

    this.list.push({
      id: 2,
      descricao: "Descrição da imagem 2",
      thumbnail: "https://ionicframework.com/docs/demos/api/card/madison.jpg"
    });

    this.list.push({
      id: 3,
      descricao: "Descrição da imagem 3",
      thumbnail: "https://ionicframework.com/docs/demos/api/card/madison.jpg"
    });

    this.list.push({
      id: 4,
      descricao: "Descrição da imagem 4",
      thumbnail: "https://ionicframework.com/docs/demos/api/card/madison.jpg"
    });

    this.list.push({
      id: 5,
      descricao: "Descrição da imagem 5",
      thumbnail: "https://ionicframework.com/docs/demos/api/card/madison.jpg"
    });

  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.data = this.list;
    }, 3000); 
  }

}
