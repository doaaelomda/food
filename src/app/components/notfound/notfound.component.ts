import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  @Input() visible:boolean=false
  @Input() notFoundMessage = "Nothing Found!";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = "/";

}
