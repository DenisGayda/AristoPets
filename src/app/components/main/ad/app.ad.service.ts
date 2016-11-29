import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Ad, IAd } from './app.ad.model';

@Injectable()
export class AppAdService {


  private headers = new Headers({'Content-Type': 'application/json'});
  private adUrl = 'app/ads';

  constructor(private http: Http) {
    
  }




  getAds(): Promise<Ad[]> {
    return this.http.get(this.adUrl)
     .toPromise()
     .then(response => response.json().data)
     .catch(this.handleError);
  }

  

  
  getAd(id: number) {
    return this.getAds()
       .then(ads => ads.filter(ad => ad.idUser == id))
       .catch(this.handleError);
  }

  getAdID(id: number) {
    return this.getAds()
       .then(ads => ads.find(ad => ad.id == id))
       .catch(this.handleError);
  }

  
  createAd(ad: IAd): Promise<IAd> {
    return this.post(ad);
  }

  updateAd(ad: IAd): Promise<IAd> {
      return this.put(ad);
  }


  private post(ad: IAd): Promise<IAd> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers});
    let body = JSON.stringify(ad);
  
    return this.http.post(this.adUrl, body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
  }

  private put(ad: Ad, ): Promise<Ad> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers});
    let body = JSON.stringify(ad);
    let url = `${this.adUrl}/${ad.id}`;
    
    return this.http.put(url, body, options)
            .toPromise()
            .then(res => ad)
            .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
