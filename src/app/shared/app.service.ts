import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { User, IUser } from './app.model';

@Injectable()
export class AppService {


  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'app/users';  // URL to web api

  constructor(private http: Http) {
    
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.userUrl)
     .toPromise()
     .then(response => response.json().data)
     .catch(this.handleError);
  }


  getUserID(id: number) {
    return this.getUsers()
       .then(users => users.find(user => user.id == id))
       .catch(this.handleError);
  }


  saveUser(user: IUser): Promise<IUser> {
    return this.put(user);
  }

  
  private post(user: IUser): Promise<IUser> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers});
    let body = JSON.stringify(user);
  
    return this.http.post(this.userUrl, body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
  }

  private put(user: User): Promise<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers});
    let body = JSON.stringify(user);
    let url = `${this.userUrl}/${user.id}`;
    
    return this.http.put(url, body, options)
            .toPromise()
            .then(res => user)
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
