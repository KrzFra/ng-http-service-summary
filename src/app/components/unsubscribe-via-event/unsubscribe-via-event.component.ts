import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FakeResponse } from 'src/app/interfaces/fake-response.interface';
import { ExampleHttpService } from 'src/app/services/example-http.service';

@Component({
	selector: 'app-unsubscribe-via-event',
	templateUrl: './unsubscribe-via-event.component.html',
	styleUrls: ['./unsubscribe-via-event.component.scss'],
})
export class UnsubscribeViaEventComponent implements OnInit, OnDestroy {
	serviceOutput: FakeResponse[];

	constructor(private exampleHttpService: ExampleHttpService) {}

	private destroyed = new Subject();

	ngOnInit(): void {
		this.exampleHttpService
			.getFakeData()
			.pipe(takeUntil(this.destroyed))
			.subscribe((fakeResponses: FakeResponse[]) => {
				this.serviceOutput = fakeResponses;
			});
	}

	ngOnDestroy(): void {
		this.destroyed.next();
		this.destroyed.complete();
	}
}
