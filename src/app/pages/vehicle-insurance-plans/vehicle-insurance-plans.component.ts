import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface VehiclePlan {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

@Component({
  selector: 'app-vehicle-insurance-plans',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './vehicle-insurance-plans.component.html',
  styleUrl: './vehicle-insurance-plans.component.css',
})
export class VehicleInsurancePlansComponent {
  selectedPlan: VehiclePlan | null = null;
  isModalOpen = false;

  plans: VehiclePlan[] = [
    { id: 1, name: 'Comprehensive Car Insurance', shortDesc: 'Full cover — own damage + third-party. Best protection for your car.', fullDesc: 'Covers own damage (accident, theft, fire) and third-party liability. Add-ons like zero depreciation, engine protection, roadside assistance available.', benefits: ['Own damage', 'Third-party', 'Theft & fire', 'Add-on options'], features: ['Own damage', 'Third-party', 'Theft & fire', 'Add-on options'] },
    { id: 2, name: 'Third-Party Car Insurance', shortDesc: 'Legal requirement. Covers damage to others — mandatory for all vehicles.', fullDesc: 'Mandatory as per Motor Vehicles Act. Covers injury/damage to third parties. Does not cover own vehicle damage. Lower premium.', benefits: ['Legal compliance', 'Third-party cover', 'Lower premium', 'Mandatory'], features: ['Legal compliance', 'Third-party cover', 'Lower premium', 'Mandatory'] },
    { id: 3, name: 'Two-Wheeler Insurance', shortDesc: 'Bike & scooter cover. Comprehensive or third-party. Quick renewal.', fullDesc: 'Motor insurance for bikes and scooters. Comprehensive or third-party. Add-ons for consumables, accessories, personal accident.', benefits: ['Bike & scooter', 'Comprehensive/TP', 'Consumables add-on', 'PA cover'], features: ['Bike & scooter', 'Comprehensive/TP', 'Consumables add-on', 'PA cover'] },
    { id: 4, name: 'Commercial Vehicle Insurance', shortDesc: 'For trucks, buses, taxis. Fleet and single-vehicle policies.', fullDesc: 'Covers commercial vehicles — trucks, buses, taxis, goods carriers. Fleet policies for multiple vehicles. Custom terms for business use.', benefits: ['Trucks & buses', 'Fleet policies', 'Goods in transit', 'Driver cover'], features: ['Trucks & buses', 'Fleet policies', 'Goods in transit', 'Driver cover'] },
    { id: 5, name: 'Zero Depreciation Cover', shortDesc: 'No depreciation deduction on parts. Claim full amount for repairs.', fullDesc: 'Add-on that waives depreciation deduction on OEM parts. Get full claim amount for repair/replacement. Especially useful for new cars.', benefits: ['No deprecation cut', 'Full claim amount', 'OEM parts', 'Ideal for new cars'], features: ['No deprecation cut', 'Full claim amount', 'OEM parts', 'Ideal for new cars'] },
    { id: 6, name: 'Engine Protection Add-on', shortDesc: 'Cover for engine damage. Hydrostatic lock, oil leakage, engine seizure.', fullDesc: 'Add-on covering engine damage from water ingress, oil leakage, and mechanical failure. Essential in flood-prone areas.', benefits: ['Engine damage', 'Hydrostatic lock', 'Oil leakage', 'Flood protection'], features: ['Engine damage', 'Hydrostatic lock', 'Oil leakage', 'Flood protection'] },
  ];

  openDetails(plan: VehiclePlan): void { this.selectedPlan = plan; this.isModalOpen = true; }
  closeModal(): void { this.isModalOpen = false; this.selectedPlan = null; }
  onCall(): void { window.location.href = 'tel:+91-9445525225'; }
  onWhatsApp(): void {
    const msg = this.selectedPlan ? encodeURIComponent(`Hi, I'm interested in ${this.selectedPlan.name}. Please share details.`) : encodeURIComponent('Hi, I need Vehicle Insurance plan details.');
    window.open(`https://wa.me/919445525225?text=${msg}`, '_blank');
  }
}
