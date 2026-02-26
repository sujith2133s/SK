import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private baseUrl = environment.apiUrl;
    private cache: any = {};

    constructor(private http: HttpClient) {
    }


getappversion(route: string, refresh: any) {
  if (this.dataForRouteIsCached(route, refresh)) {
    return of(this.cache[route]);
  } else {
    // Special case for plain text API
    const isTextResponse = route.includes('getAppVersion');
    const options: any = isTextResponse
      ? { responseType: 'text' as const }
      : {};

    return this.http.get(this.baseUrl + route, options).pipe(
      map(response => {
        this.cache[route] = response;
        return response;
      })
    );
  }
}

getDeployTimeStamp(route: string, refresh: any) {
  if (this.dataForRouteIsCached(route, refresh)) {
    return of(this.cache[route]);
  } else {
    // Special case for plain text API
    const isTextResponse = route.includes('getDeploymentTime');
    const options: any = isTextResponse
      ? { responseType: 'text' as const }
      : {};

    return this.http.get(this.baseUrl + route, options).pipe(
      map(response => {
        this.cache[route] = response;
        return response;
      })
    );
  }
}




    getData(route: string, refresh: any) {
        if (this.dataForRouteIsCached(route, refresh)) {
            return of(this.cache[route]);
        } else { // no cached data or refresh requested
            return this.http.get<any>(this.baseUrl + route).pipe(map(response => {
                this.cache[route] = response;
                return response;
            }));
        }
    }

    getWeatherData(route: string, refresh: any) {
        if (this.dataForRouteIsCached(route, refresh)) {
            return of(this.cache[route]);
        } else { // no cached data or refresh requested
            return this.http.get<any>(route).pipe(map(response => {
                this.cache[route] = response;
                return response;
            }));
        }
    }

    getDataWithParams(route: string, params: any, refresh: any) {
        if (this.dataForRouteIsCached(route, refresh)) {
            return of(this.cache[route]);
        } else { // no cached data or refresh requested
            return this.http.get<any>(this.baseUrl + route, { params: params }).pipe(map(response => {
                this.cache[route] = response;
                return response;
            }));
        }
    }

    getRecord(route: string) {
        return this.http.get<any>(this.baseUrl + route);
    }

    getRecordWithParams(route: string, params: any) {
        return this.http.get<any>(this.baseUrl + route, { params: params });
    }

    post(route: string, data: any) {
        return this.http.post<any>(this.baseUrl + route, data);
    }
    postdelete(route: string, data: any) {
        return this.http.post<any>(this.baseUrl + route, data);
    }

    delete(route: string) {
        return this.http.delete(this.baseUrl + route).pipe(map(response => {
            return response;
        }));
    }

    getReport(route: string) {
        return this.http.get(this.baseUrl + route, { responseType: 'blob' });
    }

    getExternalData(route: string) {
        return this.http.get<any>(route).pipe(map(response => {
            return response;
        }));
    }

    dataForRouteIsCached(route: string, refresh: boolean) {
        return this.cache[route] && (refresh === false || refresh === undefined);
    }

    clearCache() {
        this.cache = {};
    }

    // clearRouteCache(route) {
    //     this.cache[route] = null;
    // }

    downloadPdf(route: string, data: any): Observable<HttpResponse<Blob>> {
        return this.http.post(route, data, { observe: 'response', responseType: 'blob' });
    }

    downloadZip(route: string, data: any) {
        return this.http.post(this.baseUrl + route, data, {  observe: 'response', responseType: 'blob' });
    }
    
}
