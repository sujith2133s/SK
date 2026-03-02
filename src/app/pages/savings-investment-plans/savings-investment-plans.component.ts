import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface SavingsPlan {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
}

@Component({
  selector: 'app-savings-investment-plans',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './savings-investment-plans.component.html',
  styleUrl: './savings-investment-plans.component.css',
})
export class SavingsInvestmentPlansComponent {
  selectedPlan: SavingsPlan | null = null;
  isModalOpen = false;

  plans: SavingsPlan[] = [
    { id: 1, name: 'ULIP Plans', shortDesc: 'Unit-linked plans — invest in equity/debt funds. Market-linked returns with life cover.', fullDesc: 'ULIPs combine insurance and investment. Choose fund allocation, switch as needed. Tax benefits under 80C & 10(10D). Market-linked growth with life protection.', benefits: ['Market-linked returns', 'Fund switching', 'Tax benefit 80C', 'Life cover'], features: ['Market-linked returns', 'Fund switching', 'Tax benefit 80C', 'Life cover'] },
    { id: 2, name: 'Endowment Plans', shortDesc: 'Guaranteed returns with life cover. Traditional savings — predictable maturity benefit.', fullDesc: 'Traditional plans with guaranteed maturity. Bonus additions for extra returns. Loan facility available. Ideal for conservative investors.', benefits: ['Guaranteed maturity', 'Bonus additions', 'Loan facility', 'Life cover'], features: ['Guaranteed maturity', 'Bonus additions', 'Loan facility', 'Life cover'] },
    { id: 3, name: 'Money-back Plans', shortDesc: 'Regular payouts during term. Survival benefits at intervals + maturity corpus.', fullDesc: 'Receive a percentage of sum assured at fixed intervals. Remaining at maturity. Death benefit is full sum assured. Combines liquidity with protection.', benefits: ['Survival payouts', 'Maturity corpus', 'Death benefit', 'Liquidity'], features: ['Survival payouts', 'Maturity corpus', 'Death benefit', 'Liquidity'] },
    { id: 4, name: 'Child Plans', shortDesc: 'Build corpus for education and marriage. Waiver of premium if parent passes away.', fullDesc: 'Dedicated plans for child\'s future. Guaranteed payouts at key milestones. Waiver of premium ensures policy continues even if parent dies.', benefits: ['Education fund', 'Waiver of premium', 'Milestone payouts', 'Marriage benefit'], features: ['Education fund', 'Waiver of premium', 'Milestone payouts', 'Marriage benefit'] },
    { id: 5, name: 'Pension / Retirement Plans', shortDesc: 'Build retirement corpus. Regular pension or lump sum after 40/45/50/55/60.', fullDesc: 'Accumulate during working years. Choose annuity options for regular pension. Tax benefit 80CCC. Defer pension if still working.', benefits: ['Pension annuity', 'Tax benefit 80CCC', 'Defer option', 'Survivor pension'], features: ['Pension annuity', 'Tax benefit 80CCC', 'Defer option', 'Survivor pension'] },
    { id: 6, name: 'Guaranteed Return Plans', shortDesc: 'Fixed returns with no market risk. Predictable maturity — ideal for risk-averse.', fullDesc: 'Non-linked plans with guaranteed returns. No market risk. Assured maturity amount. Suitable for those who prefer certainty.', benefits: ['Guaranteed returns', 'No market risk', 'Predictable maturity', 'Life cover'], features: ['Guaranteed returns', 'No market risk', 'Predictable maturity', 'Life cover'] },
  ];

  openDetails(plan: SavingsPlan): void { this.selectedPlan = plan; this.isModalOpen = true; }
  closeModal(): void { this.isModalOpen = false; this.selectedPlan = null; }
  onCall(): void { window.location.href = 'tel:+91-9445525225'; }
  onWhatsApp(): void {
    const msg = this.selectedPlan ? encodeURIComponent(`Hi, I'm interested in ${this.selectedPlan.name}. Please share details.`) : encodeURIComponent('Hi, I need Savings & Investment plan details.');
    window.open(`https://wa.me/919445525225?text=${msg}`, '_blank');
  }
}
