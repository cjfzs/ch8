import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthServiceService } from './app/auth-service.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthServiceService) { }
  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }

}
