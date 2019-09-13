import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakeToShow:any;
  constructor() { }

  ngOnInit() {
    // this.averagestar();
  }

  // avg:number;
  
  // averagestar: any;
  

  // averagestar = () => {
  //   let sum: number = 0;
  //   for (let i = 0; i < this.cakeToShow.comments.length; i++){
  //     sum += this.cakeToShow.comments[i].stars;
  //   }
  //   this.avg = sum/this.cakeToShow.comments.length;
    
  // }
}

