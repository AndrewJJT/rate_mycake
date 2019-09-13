import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component.bootstrap.css']
})

export class AppComponent implements OnInit{
  title = 'public';
  allcakes:any;
  newCake:any;
  cake:any;
  // comment:any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakes();
    this.newCake = {baker_name:"", img_url:""}
    this.cake = {avgtocakeapp: "", theCake:" "}
    // this.comment = {stars:1, content:""}
  }

  getCakes(){
    let getcakesobv = this._httpService.getcakes();
    getcakesobv.subscribe(data => {
      this.allcakes = data['allcakes'].map((cake)=>{
        cake.newcomment = {stars:1, content:""};
        return cake;
      });
      // what .map do...
      // for (var i= 0; i < this.allcakes.length; i++) {
      //   this.allcakes[i].newcomment = {}
      // }
      console.log(this.allcakes);
    });
  }

  onSubmit(){
      let addedNewCakeobv = this._httpService.addcakes(this.newCake);
      addedNewCakeobv.subscribe(data => {
        console.log(data);
        this.getCakes();
      });
      this.newCake = {baker_name:"", img_url:""}
  }

  showCake(id:string){
    let selectedCakeobv = this._httpService.getcake(id);
    selectedCakeobv.subscribe(data => {
      console.log(data);
      let temp = data[0];
      let sum: number = 0;
      let avg:number;
      for (let i = 0; i < temp.comments.length; i++){
            sum += temp.comments[i].stars;
        }
      avg = Math.round(sum/temp.comments.length * 10)/10;

      this.cake = {avgtocakeapp: avg, theCake:data[0]};
    })
  }
  
  addCommentsToCake(cake){
    console.log(cake);
    let updateCakeComments = this._httpService.updateCake(cake._id, cake.newcomment);
    updateCakeComments.subscribe(data => {
      console.log(data);
    })
  }
}
