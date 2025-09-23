import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { AdminLoginPage } from './pages/admin-login/admin-login.component';
import { AdminDashboardPage } from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'admin/login', component: AdminLoginPage },
  { path: 'admin', component: AdminDashboardPage }
];
