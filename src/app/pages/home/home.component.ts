import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private apiService = inject(ApiService);
  private authService = inject(AuthService);

  publicResponse: string = '';
  protectedResponse: string = '';
  adminResponse: string = '';
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.isAdmin = this.authService.hasRole('ADMIN');
    this.loadPublic();
  }

  loadPublic(): void {
    this.apiService.getPublic().subscribe({
      next: (res) => this.publicResponse = res,
      error: (err) => this.publicResponse = 'Error: ' + err.message
    });
  }

  loadProtected(): void {
    this.apiService.getProtected().subscribe({
      next: (res) => this.protectedResponse = res,
      error: (err) => this.protectedResponse = 'Error: ' + err.message
    });
  }

  loadAdmin(): void {
    this.apiService.getAdmin().subscribe({
      next: (res) => this.adminResponse = res,
      error: (err) => this.adminResponse = 'Error: ' + err.message
    });
  }
}