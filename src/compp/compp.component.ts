import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compp',
  templateUrl: './compp.component.html',
  styleUrls: ['./compp.component.css']
})
export class ComppComponent implements OnInit {

numberOflike:number=0;

ButtonNumberLike()
{
 this.numberOflike++;
}
ButtonNumberDisLike()
{
 this.numberOflike--;
}







  constructor() { }

  ngOnInit() {
  }

}