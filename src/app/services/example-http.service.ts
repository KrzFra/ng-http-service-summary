import { FakeResponse } from './../interfaces/fake-response.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ExampleHttpService {
	constructor(private httpClient: HttpClient) {}

	getData(): Observable<any> {
		return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
	}

	getFakeData(): Observable<FakeResponse[]> {
		const subject = new Subject<FakeResponse[]>();

		setTimeout(() => {
			subject.next([
				{ stringValue: 'a', numberValue: 2, arrayValue: [] },
				{ stringValue: 'a1', numberValue: 5, arrayValue: [0] },
				{ stringValue: 'a1', numberValue: 3, arrayValue: [1, 2, 3] },
				{ stringValue: 'a1', numberValue: 4, arrayValue: [4, 5, 6, 7, 8, 9] },
			]);
			subject.complete();
		}, 1000);

		return subject.asObservable();
	}
}
