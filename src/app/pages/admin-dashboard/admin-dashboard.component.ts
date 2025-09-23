import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsService } from '../../services/gifts.service';
import { Observable } from 'rxjs';
import { Gift } from '../../models/gift.model';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="min-h-screen p-8 bg-galaxy-900 text-white">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl mb-6">Admin Dashboard</h1>
      <div *ngIf="gifts$ | async as gifts">
        <table class="w-full table-auto text-left">
          <thead><tr><th class="p-2">Name</th><th class="p-2">Status</th><th class="p-2">Buyer</th><th class="p-2">Actions</th></tr></thead>
          <tbody>
            <tr *ngFor="let g of gifts" class="border-b">
              <td class="p-2">{{g.name}}</td>
              <td class="p-2">{{g.status}}</td>
              <td class="p-2">
                <div *ngIf="g.buyerName"> {{g.buyerName}} — {{g.buyerPhone}}</div>
                <div *ngIf="g.buyerCompanions?.length">Companions: {{ getCompanionsString(g) }}</div>
              </td>
              <td class="p-2">
                <button (click)="toggleStatus(g)" class="px-2 py-1 bg-indigo-600 rounded">Toggle</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `
})
export class AdminDashboardPage {
  gifts$!: Observable<Gift[]>;
  constructor(private gifts: GiftsService) {
    this.gifts$ = this.gifts.getAll();
  }

  async toggleStatus(g: Gift) {
    const newStatus = g.status === 'available' ? 'taken' : 'available';
    await this.gifts.updateGift(String(g.id), { status: newStatus });
  }

  getCompanionsString(g: Gift): string {
    return Array.isArray(g.buyerCompanions) ? g.buyerCompanions.join(', ') : '';
  }

}
