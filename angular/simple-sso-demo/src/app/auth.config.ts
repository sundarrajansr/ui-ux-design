// auth.config.ts
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // URL of the Identity Provider
  issuer: 'https://accounts.google.com',
  
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,
  
  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: '780004476307-l9r1453e7ta72etv7mnl866of73vccj6.apps.googleusercontent.com',
  
  // set the scope for the permissions the client should request
  scope: 'openid profile email',
  
  // Use 'token' for Implicit Flow (recommended for SPAs)
  responseType: 'token id_token',
  
  // Disable strict discovery document validation
  strictDiscoveryDocumentValidation: false,
  
  // Required for Google OAuth
  oidc: true,
  
  // Show debug information
  showDebugInformation: true,
  
  // Additional parameters for Google OAuth
  customQueryParams: {
    prompt: 'select_account',
    access_type: 'online'
  },
  
  // Don't use PKCE for Implicit Flow
  disablePKCE: true,
  
  // Don't require HTTPS for local development
  requireHttps: false
};
