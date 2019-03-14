import { Injectable } from '@angular/core';

interface ObjSwitch {
  list?: boolean;
  blog?: boolean;
  bot?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TestsService {

  loadComponent: ObjSwitch = {
    list: true,
    blog: false,
    bot: false
  };

  loadComponentSwitch(component: string){
    this.loadComponent = {};
    this.loadComponent[component] = true;
    console.log( this.loadComponent + ' navigation' );
  }

  print(text){
    console.log(text);
  }

}
