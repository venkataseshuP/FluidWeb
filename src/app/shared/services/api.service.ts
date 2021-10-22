import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apislist  = [
    {
      method:'GET',
      url:'/account/{accountId}',
      name:'get account details'
    },
    {
      method:'POST',
      url:'/account',
      name:'add account details to the saving account'
    },
    {
      method:'PUT',
      url:'/account/{accountId}',
      name:'update account details'
    },
    {
      method:'DELETE',
      url:'/account/{accountId}',
      name:'delete account details'
    }
  ];
  constructor() { }
}
