import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workspace';
  constructor(private service:HttpClient){
    console.log("running");
    this.service.get('https://miniature-space-giggle-jr646wj9gpx25ww5-8080.app.github.dev/ping').subscribe((result)=>{
      console.log(result);
    });
  }
}
