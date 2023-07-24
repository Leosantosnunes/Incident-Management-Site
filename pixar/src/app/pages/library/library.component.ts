import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent extends BasePageComponent implements OnInit{

  constructor(route:ActivatedRoute){
    super(route);
  }

  override ngOnInit(): void { 
    
  }
}
