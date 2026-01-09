import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  ngOnInit(): void {
    if(this.router.url =="/contact/whatwillhappen"){
      window.scroll(0 ,220);
    }
  }
  constructor(public router: Router) { }
}
