import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const employeeService = inject(EmployeeService);
  
  // interceptor to catch 401 error if token is expired and ask user to continue or not.
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        const isContinue = confirm("Are you sure you want to continue?");
        if (isContinue) {
          employeeService.tokenExpired$.next(true);
        }
      }
      return throwError(error);
    })
  );
};
