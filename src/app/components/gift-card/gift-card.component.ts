import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Gift } from '../../models/gift.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gift-card.component.html'
})
export class GiftCardComponent {
  @Input() gift!: Gift;
  @Output() reserve = new EventEmitter<Gift>();
}
