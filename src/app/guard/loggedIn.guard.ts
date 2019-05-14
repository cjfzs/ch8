import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(): boolean {
        alert("请先登录！");
        return this.authService.isLogin();
    }
}