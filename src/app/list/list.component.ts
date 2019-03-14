import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ListApiData {
    id: number;
    name: string;
    age: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  titleMain = 'FoodDocs';
  dataRequestTitle = 'Get list of data ';

  title = 'People list - angular way ';
  listItems: ListApiData[];
  constructor(private http: HttpClient) { }

  // onclick to Delete list item
  deleteListItem( itemId: number){
    console.log('Remove by ID ' + itemId );
    this.listItems.map(( item ) => {
      if( item.id === itemId){
        const index = this.listItems.indexOf(item);
        this.listItems.splice(index, 1);
      }
    });
    console.log( this.listItems );
  }

  ngOnInit(): void {
    this.http.get('https://app.dev.fooddocs.ee/api/testtask').subscribe( (data: Array<any>) => {
      this.listItems = data;
    } );
  }

}
