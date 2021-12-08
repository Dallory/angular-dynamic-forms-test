import { Injectable } from '@angular/core';
import { FormControlConfiguration } from '../models/FormControlConfiguration';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getFormControlConfiguration(): FormControlConfiguration[] {
    return [
      new FormControlConfiguration(
        'Firstname',
        'firstname',
        false,
        true,
        'text'
      ),
      new FormControlConfiguration('Name', 'name', false, true, 'text'),
      new FormControlConfiguration('Gender', 'gender', false, false, 'gender'),
      new FormControlConfiguration(
        'Friends',
        'friends',
        false,
        false,
        'textlist'
      ),
    ];
  }

  getViewModel(): any {
    return {
      firstname: 'Peter',
      name: 'Pan',
      gender: 'male',
      friends: ['Cptn. Hook'],
    };
  }
}
