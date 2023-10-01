import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  @Output() name: string[] = ["Lucas", "Felipe", "João", "Leonardo"];
  show = true;

  constructor(){}

  ngOnInit(): void {}

}
