import { Component, OnInit } from '@angular/core';
import { TestsService } from '../tests.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements ngOnInit {

  constructor(private globalSettings: TestsService) { }

  ngOnInit() {
  }

}
