import {AfterViewInit, Component, Directive, ViewChild} from '@angular/core';
//import { Http } from '@angular/http';
import { TestsService } from './tests.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private globalSettings: TestsService){}  

  //@ViewChild('peoples_data_list_holder') div_htmlListHolder
 

  ngOnInit(){
    //this.console.print('Provider Print test message');
  }
  ngAfterViewInit(){
  }
}