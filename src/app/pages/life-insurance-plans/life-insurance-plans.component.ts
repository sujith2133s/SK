import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface LicPlan {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

@Component({
  selector: 'app-life-insurance-plans',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './life-insurance-plans.component.html',
  styleUrl: './life-insurance-plans.component.css',
})
export class LifeInsurancePlansComponent {
  selectedPlan: LicPlan | null = null;
  isModalOpen = false;

  licPlans: LicPlan[] = [
    {
      id: 1,
      name: 'LIC Term Plan',
      shortDesc: 'Pure protection at affordable premium. High sum assured for your family\'s security with minimal cost.',
      fullDesc: 'LIC Term Plan offers pure life cover at the lowest premium. Ideal for young families seeking maximum protection. No maturity benefit — 100% focus on life cover. Tax benefits under Section 80C & 10(10D).',
      benefits: ['High sum assured', 'Low premium', 'Tax benefits 80C', 'No investment component'],
      features: ['High sum assured', 'Low premium', 'Tax benefits 80C', 'No investment component'],
    },
    {
      id: 2,
      name: 'LIC Jeevan Anand',
      shortDesc: 'Endowment plan with life cover + maturity benefit. Build savings while protecting your family.',
      fullDesc: 'A traditional endowment plan combining protection and savings. Pay premium for a fixed term, get life cover throughout, and receive maturity benefit at the end. Bonus additions for better returns.',
      benefits: ['Life cover + savings', 'Bonus additions', 'Maturity benefit', 'Loan facility'],
      features: ['Life cover + savings', 'Bonus additions', 'Maturity benefit', 'Loan facility'],
    },
    {
      id: 3,
      name: 'LIC Money Back Plan',
      shortDesc: 'Regular payouts during the policy term. Survival benefits at intervals — money when you need it.',
      fullDesc: 'Get a percentage of sum assured as survival benefits at fixed intervals (e.g., 20% every 5 years). Remaining amount at maturity. Death benefit is full sum assured — a win-win for both savings and protection.',
      benefits: ['Survival benefits', 'Regular payouts', 'Death benefit', 'Maturity corpus'],
      features: ['Survival benefits', 'Regular payouts', 'Death benefit', 'Maturity corpus'],
    },
    {
      id: 4,
      name: 'LIC ULIP (New Endowment)',
      shortDesc: 'Unit-linked plan — invest in market-linked funds. Growth potential with life cover.',
      fullDesc: 'Combine insurance with investment. Choose equity, debt, or hybrid funds. Market-linked returns with life cover. Transparency in NAV and fund performance. Switch funds as per market conditions.',
      benefits: ['Market-linked returns', 'Fund options', 'Switch facility', 'Partial withdrawal'],
      features: ['Market-linked returns', 'Fund options', 'Switch facility', 'Partial withdrawal'],
    },
    {
      id: 5,
      name: 'LIC Child Plan',
      shortDesc: 'Secure your child\'s future. Education and marriage fund with guaranteed payouts.',
      fullDesc: 'Designed for parents to build corpus for child\'s education and marriage. Guaranteed payouts at key milestones. Waiver of premium benefit if parent passes away — policy continues without further payments.',
      benefits: ['Child education fund', 'Waiver of premium', 'Guaranteed payouts', 'Marriage benefit'],
      features: ['Child education fund', 'Waiver of premium', 'Guaranteed payouts', 'Marriage benefit'],
    },
    {
      id: 6,
      name: 'LIC Pension Plan',
      shortDesc: 'Build your retirement corpus. Regular pension after 40/45/50/55/60 years of age.',
      fullDesc: 'Accumulate a pension fund during working years. Choose annuity options for regular pension after retirement. Tax benefit under Section 80CCC. Defer pension if you wish to continue working.',
      benefits: ['Pension annuity', 'Tax benefit 80CCC', 'Defer option', 'Survivor pension'],
      features: ['Pension annuity', 'Tax benefit 80CCC', 'Defer option', 'Survivor pension'],
    },
  ];

  openDetails(plan: LicPlan): void {
    this.selectedPlan = plan;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedPlan = null;
  }

  onCall(): void {
    window.location.href = `tel:+91-9445525225`;
  }

  onWhatsApp(): void {
    const msg = this.selectedPlan
      ? encodeURIComponent(`Hi, I'm interested in LIC ${this.selectedPlan.name}. Please share details.`)
      : encodeURIComponent('Hi, I need information about LIC Life Insurance plans.');
    window.open(`https://wa.me/919445525225?text=${msg}`, '_blank');
  }
}
