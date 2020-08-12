import { Component } from '@angular/core';
import { ApiService }  from './api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidash';
  data:any;
  constructor(private apiService: ApiService){
  
  }
  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.apiService.getData().subscribe((res)=>{
      this.data = res;
      console.log(typeof(this.data));
      console.log(this.data);
    });
    console.log(this.data);
  }
  
  
}
