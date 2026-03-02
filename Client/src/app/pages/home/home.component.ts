import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardService } from '../../../services/card.service';
import { WebsocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLicFormOpen = false;


  constructor(private cardService: CardService, private ws: WebsocketService) {}

  ngOnInit(): void{
    this.getRecord();
      this.ws.connect();
  }
  openLicForm(event: Event) {
    event.preventDefault();
    this.isLicFormOpen = true;
  }

  closeLicForm() {
    this.isLicFormOpen = false;
  }

  onLicFormSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string | null;

    alert(
      `Thank you${name ? ' ' + name : ''}! We will contact you shortly about the best LIC plan for you.`
    );

    form.reset();
    this.closeLicForm();
  }

  getRecord() : void {
      this.cardService.getAllType().subscribe(data => {
        console.log("Data Type", data);
      });
  }
}