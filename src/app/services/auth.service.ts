import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';

const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  clientId: 'YOUR_GOOGLE_CLIENT_ID',
  redirectUri: window.location.origin,
  scope: 'openid profile email',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService, private http: HttpClient) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  loginWithGoogle() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getToken() {
    return this.oauthService.getAccessToken();
  }
}
