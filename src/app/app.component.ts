import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/httpService';
import { setToken } from './services/varibals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private httpHandler: HttpService) {}
  ngOnInit(): void {
   
  }

}