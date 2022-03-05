import { Component, Input } from '@angular/core';
import { Note } from '../note'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {

  @Input()
  notes: Note[] = []

}
