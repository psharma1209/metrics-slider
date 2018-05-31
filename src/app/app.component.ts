import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count = 1;

  constructor(private router: Router){}

  ngOnInit(){
    setInterval(() => {
      this.count++;
      if(this.count > 2){
        this.count = 1;
      }
      this.router.navigate(['view'+this.count]);
    }, 30000)
  }
}
