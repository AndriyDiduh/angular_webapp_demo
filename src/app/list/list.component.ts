import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
//export class ListComponent implements OnInit {
export class ListComponent {
  title_main = 'FoodDocs';
  dataRequestTitle = 'Get list of data ';
  
  title:string = "People list - angular way "
  listItems:any[];
  constructor(private http: HttpClient) { }

  // onclick to Delete list item 
  deleteListItem(e, itemId:number){
    console.log('Remove by ID ' + itemId );
    this.listItems.map(( item ) => {
      if( item.id == itemId){
        let index = this.listItems.indexOf(item);
        this.listItems.splice(index, 1);       
      }
    })
    console.log( this.listItems );
    //e.target.parentNode.remove(); // only deletes list DOM 
  }


  ngOnInit() {
    this.http.get('https://app.dev.fooddocs.ee/api/testtask').subscribe( (data) => {
      this.listItems = data;
    } );
  }

}
