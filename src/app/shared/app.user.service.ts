import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable, Subject, BehaviorSubject } from 'rxjs';

import { User, IUser, IAnimal, Animal, IAd, Ad, Breed} from './app.model';



@Injectable()
export class AppUserService {

  animals: Observable<Animal[]>;
  adverts: Observable<Ad[]>;
  user: Observable<User>;
  breeds: Observable<Breed[]>;
  private userPath = 'user/';
  private animalPath = 'animal/';
  private advertPath = 'advert/';
  private _user: BehaviorSubject<IUser>;
  private _animals: BehaviorSubject<IAnimal[]>;
  private _adverts: BehaviorSubject<IAd[]>;
  private _breeds: BehaviorSubject<Breed[]>;
  private dataStore: {  // This is where we will store our data in memory
    user: IUser,
    animals: IAnimal[],
    adverts: IAd[],
    breeds: Breed[]
  };
  constructor(private api: ApiService) {
    this.dataStore = { animals: [], adverts: [], user: undefined, breeds: [] };
    this._animals = <BehaviorSubject<Animal[]>>new BehaviorSubject([]);
    this._adverts = <BehaviorSubject<Ad[]>>new BehaviorSubject([]);
    this._user = <BehaviorSubject<User>>new BehaviorSubject(undefined);
    this._breeds = <BehaviorSubject<Breed[]>>new BehaviorSubject([]);
    this.animals = this._animals.asObservable();
    this.adverts = this._adverts.asObservable();
    this.user = this._user.asObservable();
    this.breeds = this._breeds.asObservable();
  }

  getUsers(): void {
    this.api.get(this.userPath)
      .map(response => response.json())
      .subscribe(res => {
      this.dataStore.user = res;
      this.dataStore.animals = res.animals;
      this.dataStore.adverts = res.adverts;
      delete this.dataStore.user.adverts;
      delete this.dataStore.user.animals;
      this._user.next(Object.assign({}, this.dataStore).user);
      this._animals.next(Object.assign({}, this.dataStore).animals);
      this._adverts.next(Object.assign({}, this.dataStore).adverts);
    });
  }
  updateUser(user: IUser): Observable<any> {
    return this.api.put(this.userPath, user)
      .map(response => response.json())
      .map(data => {
         this.dataStore.user = data;
         this._user.next(Object.assign({}, this.dataStore).user);
      })
    }

  createAnimal (animal: any): Observable<any> {
    return this.api.post(this.animalPath, animal)
      .map(response => response.json())
      .map(data => {
      this.dataStore.animals.push(data);
      this._animals.next(Object.assign({}, this.dataStore).animals);
    })
   }

  getAnimalById (id: number): Animal {
    return this.dataStore.animals.filter(elem => elem.id == id)[0]
  }

  updateAnimal(animal: Animal): Observable<any> {
    return this.api.put(`${this.animalPath}${animal.id}`, animal)
       .map(response => response.json())
       .map(data => {
        this.dataStore.animals.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.animals[i] = data; }
        });
       return this._animals.next(Object.assign({}, this.dataStore).animals);
    })
  }

  deleteAnimal(id: number) {
    this.api.delete(`${this.animalPath}${id}`)
      .map(response => response.json())
      .subscribe(() => {
        this.dataStore.animals.forEach((t, i) => {
          if (t.id === id) { this.dataStore.animals.splice(i, 1); }
        });
        return this._animals.next(Object.assign({}, this.dataStore).animals);
      })
  }


  createAdvert(advert: Ad): Observable<any> {
    return this.api.post(this.advertPath, advert)
      .map(response => response.json())
      .map(data => {
        this.dataStore.adverts.push(data);
        return this._adverts.next(Object.assign({}, this.dataStore).adverts);
      })
  }


  updateAdvert(advert: Ad): Observable<any> {
    return this.api.put(`${this.animalPath}${advert.id}`, advert)
      .map(response => response.json())
      .map(data => {
        this.dataStore.adverts.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.adverts[i] = data; }
        });
        return this._adverts.next(Object.assign({}, this.dataStore).adverts);
      })
  }

  getAdvertById (id: number): Ad {
    return this.dataStore.adverts.filter(elem => elem.id === id)[0]
  }

  deleteAdvert(id: number) {
    this.api.delete(`${this.advertPath}${id}`)
      .map(response => response.json())
      .subscribe(() => {
        this.dataStore.adverts.forEach((t, i) => {
          if (t.id === id) { this.dataStore.adverts.splice(i, 1); }
        });
        this._adverts.next(Object.assign({}, this.dataStore).adverts);
      })
  }


  addPhoto(base: string, url: string): Observable<any> {
    return this.api.post(`photo/${url}`, JSON.stringify({photo: base}))
      .map(response => response.text())
  }

  getBreeds() : void {
    this.api.get(`/breeds`)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.breeds = data;
        this._breeds.next(Object.assign({}, this.dataStore).breeds);
      })
  }
}
