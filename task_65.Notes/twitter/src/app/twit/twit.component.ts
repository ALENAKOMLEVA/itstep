import { Component, Input} from '@angular/core';
import { Twit } from '../twit';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent{

  doneTask(twit:Twit){
    let index:number = this.twits.findIndex(function(item:Twit) {
      return item == twit
  });
  console.log(index)
  if(index !== -1){
      this.twits.splice(index, 1);


  }
  }

    @Input()
    twits: Twit[] = [];
}
