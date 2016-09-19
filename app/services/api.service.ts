import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Spinner} from './spinner.service';
import {Veteran} from '../models/veteran';

const API_URL = 'http://fc-retirement-api.lerna.io/api';
const ANALYSIS_PATH = '/veterans/analysis';
const VETERANS_PATH = '/veterans';

@Injectable()
export class API {

    constructor(
        private http: Http,
        private spinner: Spinner
    ) {}

    public getAnalysis(veteran: Veteran): Observable<any> {
        return this.post(ANALYSIS_PATH, veteran);
    }

    public saveVeteran(veteran: Veteran): Observable<any> {
        if (veteran.id) {
            return this.put(VETERANS_PATH, veteran);
        }
        return this.post(VETERANS_PATH, veteran);
    }

    private post(path: string, data: Object) {
        let url = API_URL + path;
        let body = JSON.stringify(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.spinner.show();
        return this.http.post(url, body, options)
            .map((res: Response) => {
                return this.extractData(res);
            })
            .catch((error: any) => {
                return this.handleError(error);
            });
    }

    private put(path: string, data: Object) {
        let url = API_URL + path;
        let body = JSON.stringify(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.spinner.show();
        return this.http.put(url, body, options)
            .map((res: Response) => {
                return this.extractData(res);
            })
            .catch((error: any) => {
                return this.handleError(error);
            });
    }

    private extractData(res: Response) {
        this.spinner.hide();
        return res.json();
    }

    private handleError(error: any) {
        this.spinner.hide();
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
