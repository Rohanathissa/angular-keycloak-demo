import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  username: string = '';
  fullName: string = '';
  isAdmin: boolean = false;

  private authService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.username = this.authService.getUsername();
      this.isAdmin = this.authService.hasRole('ADMIN');
      this.fullName = this.authService.getFullName();
    }
  }

  logout(): void {
    this.authService.logout();
  }
}