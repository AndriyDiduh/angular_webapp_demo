import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  loadComponent:any = {
    list: true,
    blog: false,
    bot: false
  };
  //constructor() { }

  loadComponentSwitch(component){
    this.loadComponent = {[component]: true};
    console.log( this.loadComponent + ' navigation' );
  }

  print(text){
    console.log(text);
  }

}
