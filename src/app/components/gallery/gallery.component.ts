import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService';
import {  HttpHeaders  } from '@angular/common/http';
import { getSearchTarm, getToken, setToken } from '../../services/varibals';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})

export class GalleryComponent implements OnInit {
  images: any[] = []; 
   
  constructor(private httpHandler: HttpService) {}
  ngOnInit(): void {
    const requestBody = { username: 'admin' ,password:'password123'};
    this.httpHandler.post<any>('https://localhost:7014/login', requestBody).subscribe(response => {
      var headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${response.token}`
      });
       this.httpHandler.get<any>('https://localhost:7014/api/Repositoris?searchword='+`${getSearchTarm()}`,headers)
       .subscribe(res=>{
        console.log(res); 
        this.images= res
      })
    })
  }

  
  onChose(ripo:any){
    var newSession:any[] =[]
    let old= sessionStorage.getItem('bookmarks');
    if(old!=null){
      newSession.concat(JSON.parse(old)).concat(ripo)
      sessionStorage.setItem('bookmarks',JSON.stringify(newSession))
    }
    else
    sessionStorage.setItem('bookmarks', JSON.stringify(ripo));
  }
 
}
