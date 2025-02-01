import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // we use interceptors to modify the request before it is sent
  // while logging in, we send the token and store it in local storage and fetch it from here
  const token = localStorage.getItem('token');
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    }
  })
  return next(newReq);
};
