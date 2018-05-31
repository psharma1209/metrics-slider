import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let popup2:any;
    let x = screen.width/2 - 700/2;
    let y = screen.height/2 - 450/2;

    popup2 = window.open('https://logentries.com/app/79b6bc3a#/new-dashboards/31215ee5-51af-419f-8a96-587124e2124b', "logentries", 'fullscreen=yes' );
    setTimeout(() => {
      popup2.close();
    },31000);

  }

}
