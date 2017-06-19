import { Component,Injectable} from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { DatePicker } from './date-picker.component';

import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { DataService } from '../shared/data.service';

declare var jQuery: any;
@Component({
  selector: 'app-root',
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  date = "11/13/2016"; 
  /*constructor (
    private http: Http
  ) {}*/

  constructor(private dataService: DataService) {}
  datas:any = {};
  // date = "11/13/2016"; 
  /*loadData() {
    this.dataService.getData().subscribe(data => this.data = data);
    return this.data ;
  } */
  /*ngOnInit(){
    this.dataService.getData().subscribe(data => this.datas = data);
  }*/
  loadData() {
    this.dataService.getData().subscribe(data => this.datas = data);
    return this.datas ;
  } 
  
  onDateChange(date) {
    this.date = date;
    this.loadData();
     /*date = this.loadData();
     console.log(date)*/
  }
}
