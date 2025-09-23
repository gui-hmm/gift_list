import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Gift } from '../../models/gift.model';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'app-reserve-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reserve-modal.component.html'
})
export class ReserveModalComponent {
  @Input() gift!: Gift;
  @Output() done = new EventEmitter<void>();

  form: FormGroup;
  loading = false;
  message = '';

  constructor(private fb: FormBuilder, private giftsService: GiftsService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      companions: ['']
    });
  }

  async submit() {
    if (this.form.invalid) return;
    this.loading = true;
    const val = this.form.value;

    const name = val.name ?? '';
    const phone = val.phone ?? '';
    const companionsArray = val.companions ? val.companions.split(',').map((s:any)=>s.trim()).filter((s:any)=>s) : [];
    try {
      await this.giftsService.reserveGift(String(this.gift.id), { name: val.name, phone: val.phone, companions: companionsArray });
      this.message = 'Reservado com sucesso! muito obrigado!!';
      setTimeout(()=> this.done.emit(), 3000);
    } catch (err) {
      console.error(err);
      this.message = 'Ocorreu um erro. Tente novamente.';
    } finally {
      this.loading = false;
    }
  }

  close() {
    this.done.emit();
  }
}
