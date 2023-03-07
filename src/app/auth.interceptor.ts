import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.authService.getToken();
    let authReq = req;

    if (authToken)
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      authReq = req.clone({
        headers: req.headers.set(
          'Application-Authorization',
          'Bearer ' + authToken
        ),
      });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
