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
  anionac:number=2007;
  nombre='Camilo Perez';
  mensaje:string='';
  edades:number[]=[16, 22, 35, 46];
  heroes=[
    {nombre:'SpiderMan',
    personaje:'Peter',
    descripcion:'Este es el hombre araña',
    foto:'assets/fotos/SpiderMan.jfif'},

    {nombre:'IronMan',
    personaje:'Luke',
    descripcion:'Este es el hombre de hierro',
    foto:'assets/fotos/IronMan.jpg'},

    {nombre:'Hulk',
    personaje:'Bruce',
    descripcion:'Este es el hombre increible',
    foto:'assets/fotos/Hulk.jpg'}
  ]
  constructor() {
    this,this.mensaje=`Hola me llamo ${this.nombre} y tengo ${2021-this.anionac} años de edad, y nací en Colombia`;
   }

  ngOnInit(): void {
    console.log(this.isAct);
    if(this.isAct){
      console.log(this.mensaje);
    }
  }

}
