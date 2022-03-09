import { Component } from '@angular/core';
import { Twit } from './twit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: Twit[] = [];

    nameNotes:string = "";
    text: string = "";
    date: any;
   

    addPost():void{
        if(this.nameNotes != "" && this.text != ""){
            this.posts.push({
                nameNotes: this.nameNotes,
                date: this.date,
                text: this.text
            })
            this.nameNotes = "";
            this.text = "";
            this.date = "";
        }

    }
}
