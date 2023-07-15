import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent extends BasePageComponent implements OnInit{

  constructor(route:ActivatedRoute){
    super(route);
  }

  override ngOnInit(): void { 
    
  }
}
