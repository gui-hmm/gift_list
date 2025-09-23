import { Component } from '@angular/core';
import { GiftsListComponent } from '../../components/gifts-list/gifts-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GiftsListComponent],
  template: `<app-gifts-list class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">

  </app-gifts-list>`
})
export class HomePage {}
