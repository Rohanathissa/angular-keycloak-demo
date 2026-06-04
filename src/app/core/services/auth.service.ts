import { Injectable, inject } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private keycloak = inject(Keycloak);

    login(): void {
        this.keycloak.login();
    }

    logout(): void {
        this.keycloak.logout({ redirectUri: window.location.origin });
    }

    getUsername(): string {
        return this.keycloak.tokenParsed?.['preferred_username'] ?? '';
    }

    isLoggedIn(): boolean {
        return this.keycloak.authenticated ?? false;
    }

    hasRole(role: string): boolean {
        return this.keycloak.hasRealmRole(role);
    }

    getFullName(): string {
        return this.keycloak.tokenParsed?.['name'] ?? '';
    }
}