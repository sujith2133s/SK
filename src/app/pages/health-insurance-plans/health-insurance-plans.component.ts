import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface HealthPlan {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

@Component({
  selector: 'app-health-insurance-plans',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './health-insurance-plans.component.html',
  styleUrl: './health-insurance-plans.component.css',
})
export class HealthInsurancePlansComponent {
  selectedPlan: HealthPlan | null = null;
  isModalOpen = false;

  plans: HealthPlan[] = [
    { id: 1, name: 'Individual Health Plan', shortDesc: 'Personal medical cover for you. Cashless treatment, pre & post hospitalisation, and no-claim bonus.', fullDesc: 'Comprehensive individual health insurance covering hospitalisation, day-care procedures, and ambulance. Wide network of cashless hospitals. Tax benefit under Section 80D.', benefits: ['Cashless treatment', 'Pre/post hospitalisation', 'No-claim bonus', 'Tax benefit 80D'], features: ['Cashless treatment', 'Pre/post hospitalisation', 'No-claim bonus', 'Tax benefit 80D'] },
    { id: 2, name: 'Family Floater Plan', shortDesc: 'One policy for the whole family. Cover spouse, children, and parents under a single premium.', fullDesc: 'One sum insured shared by all family members. Cost-effective for families. New-born coverage, maternity benefits in select plans.', benefits: ['One policy, whole family', 'Shared sum insured', 'New-born cover', 'Maternity options'], features: ['One policy, whole family', 'Shared sum insured', 'New-born cover', 'Maternity options'] },
    { id: 3, name: 'Critical Illness Cover', shortDesc: 'Lump sum payout on diagnosis of critical illness. Covers cancer, heart attack, stroke, and more.', fullDesc: 'Pays lump sum on first diagnosis of covered critical illnesses. Use for treatment, income loss, or lifestyle adjustments. Usually a standalone or top-up.', benefits: ['Lump sum payout', '30+ illnesses covered', 'Standalone or top-up', 'No hospitalisation needed'], features: ['Lump sum payout', '30+ illnesses covered', 'Standalone or top-up', 'No hospitalisation needed'] },
    { id: 4, name: 'Top-up & Super Top-up', shortDesc: 'Additional cover over your base policy. High coverage at lower premium for existing policyholders.', fullDesc: 'Activates after base policy limit is exhausted. Super top-up has per-claim deductible. Ideal to boost coverage without high premium.', benefits: ['Extra cover at low cost', 'Activates after base limit', 'Per-claim or aggregate', 'Ideal for high coverage'], features: ['Extra cover at low cost', 'Activates after base limit', 'Per-claim or aggregate', 'Ideal for high coverage'] },
    { id: 5, name: 'Senior Citizen Plan', shortDesc: 'Designed for 60+ age. Pre-existing cover, OPD, and restoration benefit.', fullDesc: 'Health plans tailored for senior citizens. Coverage for pre-existing conditions after waiting period. Restoration of sum insured.', benefits: ['60+ age focused', 'Pre-existing covered', 'Restoration benefit', 'OPD options'], features: ['60+ age focused', 'Pre-existing covered', 'Restoration benefit', 'OPD options'] },
    { id: 6, name: 'Group Health Insurance', shortDesc: 'For employers and organisations. Cover employees and dependants at group rates.', fullDesc: 'Corporate group health plans. Lower premium, customisable benefits. Maternity, OPD, and wellness add-ons available.', benefits: ['Group discount', 'Custom benefits', 'Employee + dependants', 'Wellness add-ons'], features: ['Group discount', 'Custom benefits', 'Employee + dependants', 'Wellness add-ons'] },
  ];

  openDetails(plan: HealthPlan): void { this.selectedPlan = plan; this.isModalOpen = true; }
  closeModal(): void { this.isModalOpen = false; this.selectedPlan = null; }
  onCall(): void { window.location.href = 'tel:+91-9445525225'; }
  onWhatsApp(): void {
    const msg = this.selectedPlan ? encodeURIComponent(`Hi, I'm interested in ${this.selectedPlan.name}. Please share details.`) : encodeURIComponent('Hi, I need Health Insurance plan details.');
    window.open(`https://wa.me/919445525225?text=${msg}`, '_blank');
  }
}
