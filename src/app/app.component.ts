import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = faker.lorem.sentence();
  enteredText: string = '';

  currentDateTime = new Date;
  startTime: number = this.currentDateTime.getTime();
  completionTime: number = 0;

  detectTyping(event: any) {
    this.enteredText = event.target.value;
    if (this.enteredText === this.randomText) {
      const finishDateTime = new Date;
      this.completionTime = ((finishDateTime.getTime() - this.startTime)/1000)/this.randomText.length;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

  reloadGame() {
    window.location.reload();
  }
}
