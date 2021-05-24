import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
   
     heroes:string[]=['Spiderman','Ironman','Hulk','Thor','AntMan'];
     heroeborrado:String='';

  borrarHeroe(){
    //console.log('Borrando...');
    const heroeborrado = this.heroes.shift()||'';
    this.heroeborrado = heroeborrado;
    console.log(heroeborrado);
  }


}
