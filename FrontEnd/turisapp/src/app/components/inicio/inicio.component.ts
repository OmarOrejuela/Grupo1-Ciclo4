import { Component, OnInit } from '@angular/core';
const URL_SITIO='GOOGLE.COM';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  isAct:boolean = true;
  edad:number=15;
  constructor() { }

  ngOnInit(): void {
    console.log(this.isAct);
    if(this.isAct){
      console.log(this.edad);
    }
  }

}
