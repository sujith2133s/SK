import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CardService } from '../../../services/card.service';
import { WebsocketService } from '../../../services/websocket.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLicFormOpen = false;
  cards: any[] = [];
  pageSize = 3;
  currentPage = 1;

  constructor(private cardService: CardService, private ws: WebsocketService) {}

  ngOnInit(): void {
    this.cards = this.getDefaultCards();
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

  getRecord(): void {
    this.cardService.getAllType().subscribe({
      next: (data) => {
        console.log('[Home] Card API response:', data);
        let list: any[] = [];
        if (Array.isArray(data)) {
          list = data;
        } else if (data && typeof data === 'object') {
          const d = data as { [key: string]: any };
          list =
  (Array.isArray(d['cards']) ? d['cards'] : null) ||
  (Array.isArray(d['data']) ? d['data'] : null) ||
  (Array.isArray(d['items']) ? d['items'] : null) ||
  [];
        }
        // Ensure API-driven cards include General Insurance (id:4) when backend omits it
        const hasGeneralInsurance =
          list.some((x) => x && typeof x === 'object' && (x['id'] === 4 || String(x['type'] ?? '').toLowerCase() === 'genaralinsurance')) ||
          false;
        if (!hasGeneralInsurance) {
          list = [
            ...list,
            {
              id: 4,
              type: 'GenaralInsurance',
              description: 'Covers genaral insurance plan',
              plans: [],
            },
          ];
        }

        const normalized = this.normalizeCards(list);
        console.log('[Home] Normalized cards used in UI:', normalized);
        this.cards = normalized.length > 0 ? normalized : this.getDefaultCards();
        this.currentPage = 1;
      },
      error: (err) => {
        console.error('[Home] Card API error:', err);
        this.cards = this.getDefaultCards();
        this.currentPage = 1;
      },
    });
  }

  get totalPages(): number {
    return this.cards.length > 0 ? Math.ceil(this.cards.length / this.pageSize) : 1;
  }

  get pagedCards(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.cards.slice(start, start + this.pageSize);
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  private getDefaultCards(): any[] {
    return [
      { title: 'Life Insurance (LIC)', subTitle: "Secure your family's financial future. Term plans, endowment, ULIP — we find the best fit for your goals and budget.", points: ['Term Plans', 'Endowment', 'ULIP Plans'] },
      { title: 'Health Insurance (Star Health)', subTitle: 'Cashless hospitalisation, comprehensive medical coverage for you and your entire family at affordable premiums.', points: ['Cashless Hospitals', 'Family Floater', 'Critical Illness'] },
      { title: 'Savings & Investment Plans', subTitle: 'Grow your wealth with insurance-linked savings plans. Get returns + life cover — the smartest way to save for the future.', points: ['Guaranteed Returns', 'Tax Benefits', 'Life Cover'] },
    ];
  }

  private normalizeCards(input: any[]): any[] {
    if (!Array.isArray(input)) return [];

    return input
      .map((x) => {
        if (!x || typeof x !== 'object') return null;
        const o = x as Record<string, any>;

        const title = this.firstString(o['title'], o['name'], o['cardName'], o['planName'], o['type']);
        const subTitle = this.firstString(
          o['subTitle'],
          o['subtitle'],
          o['sub_title'],
          o['description'],
          o['desc']
        );

        const pointsRaw =
          o['points'] ?? o['features'] ?? o['featureList'] ?? o['benefits'] ?? o['plans'] ?? o['planList'];
        const points = this.normalizePoints(pointsRaw);

        return {
          ...o,
          title: title ?? o['title'],
          subTitle: subTitle ?? o['subTitle'],
          points,
        };
      })
      .filter((x) => x && (x.title || x.subTitle || (Array.isArray(x.points) && x.points.length > 0)));
  }

  private firstString(...values: any[]): string | null {
    for (const v of values) {
      if (typeof v === 'string' && v.trim().length > 0) return v.trim();
    }
    return null;
  }

  private normalizePoints(value: any): string[] {
    if (Array.isArray(value)) {
      return value
        .map((p) => {
          if (typeof p === 'string') return p.trim();
          if (typeof p === 'number') return String(p);
          if (p && typeof p === 'object') {
            const o = p as Record<string, any>;
            return this.firstString(o['title'], o['name'], o['planName'], o['label'], o['description']);
          }
          return null;
        })
        .filter((p): p is string => !!p && p.length > 0);
    }
    if (typeof value === 'string') {
      // Supports: "a,b,c" or "a | b | c" or multiline
      const parts = value.split(/[\n,|]/g).map((s) => s.trim()).filter(Boolean);
      return parts;
    }
    return [];
  }
}