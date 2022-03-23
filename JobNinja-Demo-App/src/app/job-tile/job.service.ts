import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Jobs } from './job-tile';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class JobsService {
  jobsUrl = 'https://jndevelop-2018.s3.amazonaws.com/_andy/interview220322.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ3KO4D6AGZQ5RK5H/20220322/eu-central-1/s3/aws4_request&X-Amz-Date=20220322T131911Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a18e5c7c15f288d0458380b77ebb9123303936bfc745cb44d27826b45bfe7d2f';  // URL to web api
  //private handleError: HandleError;

  constructor(
    public http: HttpClient) {
  }

  /** GET jobs from the server */
  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.jobsUrl)
      .pipe();
  }
}