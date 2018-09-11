import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://api.punkapi.com';

@Injectable()
export class BeerListService {

  constructor(private http: HttpClient) { }

  getList(page) {
    return this.http.get<any>(`${BASE_URL}/v2/beers?page=${page}&per_page=20`);
  }

  getSimilarBeer(ibu, abv, ebc, diff) {
    return this.http.get<any>(
      // tslint:disable-next-line:max-line-length
      `${BASE_URL}/v2/beers?ibu_gt=${ibu - diff}&ibu_lt=${ibu + diff}&abv_gt=${abv - diff}&abv_lt=${abv + diff}&ebc_gt=${ebc - 2}&ebc_lt=${ebc + diff}`
    );
  }
}
