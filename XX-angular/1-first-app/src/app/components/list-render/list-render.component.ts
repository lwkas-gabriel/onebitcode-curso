import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{
  users = [
    {name: "Lucas", dogs: "Sim"},
    {name: "Juliana", dogs: "Não"},
    {name: "Isaac", dogs: "Sim"},
    {name: "Leonardo", dogs: "Não"},
  ]

  constructor(){}

  ngOnInit(): void {

  }
}
