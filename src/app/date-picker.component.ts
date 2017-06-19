import { Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";

import { Observable } from 'rxjs/Rx';
import { DataService } from '../shared/data.service';

declare var jQuery: any;

@Component({
  selector: 'my-datepicker',
  providers: [DataService],
  template: `<input #input type="text" readonly>`
})
export class DatePicker implements AfterViewInit {

  constructor(private dataService: DataService) {}

  @Input() value = '';
  @Output() dateChange = new EventEmitter();

  @ViewChild('input') input: ElementRef;

  /*loadData() {
    this.dataService.getData().subscribe(data => this.datas = data);
    return this.datas ;
  } */

  ngAfterViewInit() {
    jQuery(this.input.nativeElement).datepicker({
      onSelect: (value) => {
        this.value = value;
        this.dateChange.next(value);
      }
    })
    .datepicker('setDate', this.value);
    
  }
}