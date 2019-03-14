import {AfterViewInit, Component, Directive, ViewChild} from '@angular/core';
import { TestsService } from './tests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private globalSettings: TestsService){}
}
