import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <div class="min-h-screen flex items-center justify-center bg-galaxy-hero">
    <form (ngSubmit)="login()" [formGroup]="form" class="p-6 bg-galaxy-800 rounded">
      <h2 class="text-2xl mb-4">Admin Login</h2>
      <input formControlName="email" placeholder="Email" class="w-full p-2 rounded bg-galaxy-700 mb-2"/>
      <input formControlName="password" type="password" placeholder="Password" class="w-full p-2 rounded bg-galaxy-700 mb-4"/>
      <div class="flex justify-end">
        <button class="px-3 py-2 bg-indigo-600 rounded" type="submit">Login</button>
      </div>
      <p class="mt-2 text-sm">Use the Firebase Auth admin account you created.</p>
    </form>
  </div>
  `
})
export class AdminLoginPage {
  form: any; 

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async login() {
    const v = this.form.value;
    const email = v.email?.trim(); 
    const password = v.password?.trim();

    if (!email || !password) {
      alert('Both email and password are required');
      return;
    }
    try {
      await this.auth.login(v.email, v.password);
      this.router.navigate(['/admin']);
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  }
}
