import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gift } from '../../models/gift.model';
import { GiftCardComponent } from '../gift-card/gift-card.component';
import { ReserveModalComponent } from '../reserve-modal/reserve-modal.component';
import { GiftsService } from '../../services/gifts.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gifts-list',
  standalone: true,
  imports: [CommonModule, GiftCardComponent, ReserveModalComponent],
  templateUrl: './gifts-list.component.html'
})
export class GiftsListComponent {
  gifts$!: Observable<Gift[]>;
  selectedGift: Gift | null = null;
  showingModal = false;

  constructor(private giftsService: GiftsService) {
    this.gifts$ = this.giftsService.getAll();
  }

  openReserve(gift: Gift) {
    this.selectedGift = gift;
    this.showingModal = true;
  }

  onReserved() {
    this.selectedGift = null;
    this.showingModal = false;
  }

  stars = Array.from({length: 50}, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

}
