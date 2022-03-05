import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts: Note[] = [];
  nameNotes:string = "";
  text: string = "";
 


    addPost():void{
        if(this.nameNotes != "" && this.text != ""){
            this.posts.push({
                date: new Date(),
                text: this.text,
                nameNotes: this.nameNotes
            })
            
            this.text = "";
            this.nameNotes = "";
        }

    }
}


