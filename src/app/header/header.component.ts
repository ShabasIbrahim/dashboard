import { Component, EventEmitter, Output } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  


  // user defined event creation

  // object creation
  // @output-to share data from child to parent 

  @Output() btnClick= new EventEmitter()




  menubtnClicked(){


    // to occur an user defined event 
    this.btnClick.emit()



  }





}

