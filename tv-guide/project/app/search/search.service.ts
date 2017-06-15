import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Show } from './show';

@Injectable()
export class SearchService {
  constructor(private _http: Http) {}
}
