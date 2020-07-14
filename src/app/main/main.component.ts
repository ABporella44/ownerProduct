import { Component, OnInit } from '@angular/core';
import { prodctsService } from '../services/main.service';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html'
  
})
export class MainComponent implements OnInit {
        public products:any;
  constructor(public service:prodctsService){ }

  ngOnInit(): void {
    this.service.getProducts().subscribe((posres)=>{
      this.products = posres;
    },(errRes:HttpErrorResponse)=>{
      console.log(errRes);
    });
  }

}
