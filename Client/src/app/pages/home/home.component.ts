import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLicFormOpen = false;

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
}