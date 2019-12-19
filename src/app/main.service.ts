import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  save(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    }
  }

  load(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
    }
  }
}
