import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  onSubmit() {
    alert('Thank you! We will call you back shortly. For immediate help, call +91-9994738638');
  }
}
