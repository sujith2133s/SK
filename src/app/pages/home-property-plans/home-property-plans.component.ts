import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface HomePlan {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

@Component({
  selector: 'app-home-property-plans',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './home-property-plans.component.html',
  styleUrl: './home-property-plans.component.css',
})
export class HomePropertyPlansComponent {
  selectedPlan: HomePlan | null = null;
  isModalOpen = false;

  plans: HomePlan[] = [
    { id: 1, name: 'Standard Fire & Allied Perils', shortDesc: 'Protect your property from fire, lightning, explosion, and allied risks. Basic yet essential cover.', fullDesc: 'Covers loss or damage due to fire, lightning, explosion, storm, flood, earthquake, riots, and more. Mandatory for home loans.', benefits: ['Fire & lightning', 'Storm & flood', 'Earthquake', 'Riot & strike'], features: ['Fire & lightning', 'Storm & flood', 'Earthquake', 'Riot & strike'] },
    { id: 2, name: 'Home Structure + Content', shortDesc: 'Cover both the building and valuables inside. Comprehensive protection for owners.', fullDesc: 'Dual cover — structure (walls, roof, floors) and contents (furniture, appliances, valuables). Optional jewellery and electronic add-ons.', benefits: ['Structure cover', 'Content cover', 'Jewellery add-on', 'Electronic add-on'], features: ['Structure cover', 'Content cover', 'Jewellery add-on', 'Electronic add-on'] },
    { id: 3, name: 'Tenant Insurance', shortDesc: 'For renters. Cover your belongings and liability in a rented home.', fullDesc: 'Protects tenant\'s belongings — furniture, gadgets, personal items. Covers accidental damage to landlord\'s property. Liability cover included.', benefits: ['Belongings cover', 'Liability cover', 'Renter-friendly', 'Affordable'], features: ['Belongings cover', 'Liability cover', 'Renter-friendly', 'Affordable'] },
    { id: 4, name: 'Landlord Insurance', shortDesc: 'For property owners. Cover rental income loss and property damage.', fullDesc: 'Protects landlord\'s property and rental income. Covers damage by tenants, loss of rent, and legal expenses.', benefits: ['Rental loss cover', 'Tenant damage', 'Legal expenses', 'Property protection'], features: ['Rental loss cover', 'Tenant damage', 'Legal expenses', 'Property protection'] },
    { id: 5, name: 'Burglary & Theft Cover', shortDesc: 'Protection against theft and burglary. Secure your home and valuables.', fullDesc: 'Covers loss from burglary, housebreaking, and theft. Add-on to home policy or standalone. Often includes documentation support.', benefits: ['Theft cover', 'Burglary protection', 'Document support', 'Quick claims'], features: ['Theft cover', 'Burglary protection', 'Document support', 'Quick claims'] },
    { id: 6, name: 'Natural Disaster Cover', shortDesc: 'Extended cover for earthquake, flood, cyclone. Essential in disaster-prone areas.', fullDesc: 'Add-on or inclusion for natural calamities — earthquake, flood, cyclone, landslide. Higher sum insured options for high-value properties.', benefits: ['Earthquake', 'Flood', 'Cyclone', 'Landslide'], features: ['Earthquake', 'Flood', 'Cyclone', 'Landslide'] },
  ];

  openDetails(plan: HomePlan): void { this.selectedPlan = plan; this.isModalOpen = true; }
  closeModal(): void { this.isModalOpen = false; this.selectedPlan = null; }
  onCall(): void { window.location.href = 'tel:+91-9445525225'; }
  onWhatsApp(): void {
    const msg = this.selectedPlan ? encodeURIComponent(`Hi, I'm interested in ${this.selectedPlan.name}. Please share details.`) : encodeURIComponent('Hi, I need Home & Property Insurance plan details.');
    window.open(`https://wa.me/919445525225?text=${msg}`, '_blank');
  }
}
