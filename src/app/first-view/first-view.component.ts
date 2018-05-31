import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

  constructor(private http: HttpClient) { }
  screenHeight: number;
  screenWidth: number;

  ngOnInit() {
    let popup:any;
    let x = screen.width/2 - 700/2;
    let y = screen.height/2 - 450/2;

    popup = window.open('https://gjy47700.live.dynatrace.com/#dashboard;id=d51464bd-88cc-4a81-afe6-0a1956e2d96d;gtf=l_7_DAYS', "dynatrace", 'fullscreen=yes' );
    setTimeout(() => {
      popup.close();
    },31000);
  }

}
