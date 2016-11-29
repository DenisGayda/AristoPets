import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Animal, IAnimal } from './app.animal.model';

@Injectable()


export class AppAnimalService {


  private headers = new Headers({'Content-Type': 'application/json'});
  private animalUrl = 'app/animals';

  constructor(private http: Http) {
    
  }




  getAnimals(): Promise<Animal[]> {
    return this.http.get(this.animalUrl)
     .toPromise()
     .then(response => response.json().data)
     .catch(this.handleError);
  }

  

  
  getAnimal(id: number) {
    return this.getAnimals()
       .then(animals => animals.filter(animal => animal.idUser == id))
       .catch(this.handleError);
  }

  getAnimalID(id: number) {
    return this.getAnimals()
       .then(animals => animals.find(animal => animal.id == id))
       .catch(this.handleError);
  }

  
  createAnimal(animal: IAnimal): Promise<IAnimal>{
    return this.post(animal);
  }

  updateAnimal(animal: IAnimal): Promise<IAnimal> {
      return this.put(animal);
  }


  private post(animal: IAnimal): Promise<IAnimal> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers});
    let body = JSON.stringify(animal);
  
    return this.http.post(this.animalUrl, body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
  }

  private put(animal: Animal, ): Promise<Animal> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers});
    let body = JSON.stringify(animal);
    let url = `${this.animalUrl}/${animal.id}`;
    
    return this.http.put(url, body, options)
            .toPromise()
            .then(res => animal)
            .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
