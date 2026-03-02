import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface TravelPlan {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

@Component({
  selector: 'app-travel-insurance-plans',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './travel-insurance-plans.component.html',
  styleUrl: './travel-insurance-plans.component.css',
})
export class TravelInsurancePlansComponent {
  selectedPlan: TravelPlan | null = null;
  isModalOpen = false;

  plans: TravelPlan[] = [
    { id: 1, name: 'Domestic Travel Plan', shortDesc: 'Cover for trips within India. Medical emergencies, trip delays, and baggage loss.', fullDesc: 'Travel insurance for domestic trips. Covers medical expenses, trip cancellation, delay, and lost baggage. Ideal for business trips and holidays.', benefits: ['Medical cover in India', 'Trip delay', 'Baggage loss', 'Affordable premium'], features: ['Medical cover in India', 'Trip delay', 'Baggage loss', 'Affordable premium'] },
    { id: 2, name: 'International Travel Plan', shortDesc: 'Global cover for overseas travel. Emergency medical, evacuation, and trip interruption.', fullDesc: 'Comprehensive international travel insurance. Medical emergencies abroad, emergency evacuation, trip cancellation, lost passport, and baggage.', benefits: ['Global medical cover', 'Emergency evacuation', 'Passport loss', 'Trip cancellation'], features: ['Global medical cover', 'Emergency evacuation', 'Passport loss', 'Trip cancellation'] },
    { id: 3, name: 'Student Travel Insurance', shortDesc: 'For students studying abroad. Extended cover, personal liability, study interruption.', fullDesc: 'Designed for students going overseas for education. Extended duration, personal liability, study interruption, and optional add-ons.', benefits: ['Extended duration', 'Study interruption', 'Personal liability', 'Guardian visit cover'], features: ['Extended duration', 'Study interruption', 'Personal liability', 'Guardian visit cover'] },
    { id: 4, name: 'Senior Citizen Travel', shortDesc: 'Travel cover for 60+ age. No upper age limit, pre-existing conditions covered.', fullDesc: 'Travel insurance for senior citizens. Age-friendly terms, cover for pre-existing conditions, and medical emergencies during travel.', benefits: ['60+ age cover', 'Pre-existing covered', 'Medical emergencies', 'Simplified process'], features: ['60+ age cover', 'Pre-existing covered', 'Medical emergencies', 'Simplified process'] },
    { id: 5, name: 'Trip Cancellation Plan', shortDesc: 'Protect your booking. Refund on cancellation due to illness, natural disaster.', fullDesc: 'Covers non-refundable trip costs if you cancel due to covered reasons — illness, accident, natural disaster, or visa rejection.', benefits: ['Non-refundable protection', 'Illness & accident', 'Natural disaster', 'Visa rejection'], features: ['Non-refundable protection', 'Illness & accident', 'Natural disaster', 'Visa rejection'] },
    { id: 6, name: 'Annual Multi-trip Plan', shortDesc: 'Cover multiple trips in a year. One policy, unlimited travel within limit.', fullDesc: 'Single policy for multiple trips in 12 months. Each trip covered up to specified days. Ideal for frequent travellers.', benefits: ['Multiple trips', 'One policy per year', 'Per-trip day limit', 'Cost-effective'], features: ['Multiple trips', 'One policy per year', 'Per-trip day limit', 'Cost-effective'] },
  ];

  openDetails(plan: TravelPlan): void { this.selectedPlan = plan; this.isModalOpen = true; }
  closeModal(): void { this.isModalOpen = false; this.selectedPlan = null; }
  onCall(): void { window.location.href = 'tel:+91-9445525225'; }
  onWhatsApp(): void {
    const msg = this.selectedPlan ? encodeURIComponent(`Hi, I'm interested in ${this.selectedPlan.name}. Please share details.`) : encodeURIComponent('Hi, I need Travel Insurance plan details.');
    window.open(`https://wa.me/919445525225?text=${msg}`, '_blank');
  }
}
