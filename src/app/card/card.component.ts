import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  

// here input deorator used to child to Parent access and bg ,icon etc that we create on dashboard com.html 
// to give card separate properties

  @Input() bg:string=''
  @Input() icon:string=''
  @Input() description:string=''
  @Input() count:string=''

}
