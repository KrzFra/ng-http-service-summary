import { TestBed } from '@angular/core/testing';

import { ExampleHttpService } from './example-http.service';

describe('ExampleHttpServiceService', () => {
	let service: ExampleHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ExampleHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
