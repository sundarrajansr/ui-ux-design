// app.component.ts
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  error: string = '';
  defaultProfileImage = 'assets/images/default-profile.png';

  constructor(private oauthService: OAuthService) {
    // Configure the OAuthService
    this.oauthService.configure(authConfig);
    
    // For better debugging
    this.oauthService.events.subscribe(e => {
      console.log('OAuth Event:', e);
    });
  }

  async ngOnInit() {
    try {
      // Load the discovery document
      await this.oauthService.loadDiscoveryDocument();
      
      // Try to handle the OAuth callback
      const isLoggedIn = await this.oauthService.tryLogin({
        onTokenReceived: (info) => {
          console.log('Token received', info);
        }
      });
      
      if (this.oauthService.hasValidAccessToken()) {
        this.user = this.oauthService.getIdentityClaims();
        console.log('User info:', this.user);
      }
    } catch (error) {
      console.error('Error initializing OAuth', error);
      this.error = 'Error initializing authentication. Please try again.';
    }
  }

  login() {
    try {
      // Clear any existing tokens
      this.oauthService.logOut();
      
      // Start the login flow
      this.oauthService.initLoginFlow();
    } catch (error) {
      console.error('Login error:', error);
      this.error = 'Error during login. Please try again.';
    }
  }

  logout() {
    this.oauthService.logOut();
    this.user = null;
  }

  getProfileImage(pictureUrl: string): string {
    // Return the picture URL directly - the browser will handle CORS
    // If you still face CORS issues, you might need to set up a proxy on your backend
    return pictureUrl;
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultProfileImage;
    imgElement.onerror = null; // Prevent infinite loop if default image fails
  }

  isLoggedIn(): boolean {
    const hasValidToken = this.oauthService.hasValidAccessToken();
    if (hasValidToken && !this.user) {
      this.user = this.oauthService.getIdentityClaims();
    }
    return hasValidToken;
  }
}
