import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento = {
    id: "",
    descricao: "",
    thumbnail: ""
  };

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    // TODO: Obter dados do evento a partir do id passado no parâmetro

    this.evento.id = this.route.snapshot.params.id;
    this.evento.descricao = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio amet pariatur, commodi consequuntur cupiditate omnis, cumque quos odit, earum excepturi porro similique debitis! Natus ut ad non nostrum nobis?";
    this.evento.thumbnail = "https://ionicframework.com/docs/demos/api/card/madison.jpg";
  }

}
