import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./pages/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}

    canActivate(): boolean{
        if(this.authService.authentication()){
            return true;
        }else{
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}