import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        id: 1,
        email: 'test@mail.ru',
        password: 'test',
        city: 'Odessa',
        bread: 'dog',
        name: 'Denis'
      }
    ];
    let animals = [
      {
        id: 0,
        idUser: 0,
        image: '',
        name: ''
      }
    ];
    let ads = [
      {
        id: 0,
        idUser: 0,
        image: '',
        name: ''
      }
    ];
    return {users, animals, ads};
  }
}