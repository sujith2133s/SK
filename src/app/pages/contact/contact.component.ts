import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    // Logic for form submission goes here
    alert('Thank you for reaching out! We will get back to you shortly.');
  }
}
