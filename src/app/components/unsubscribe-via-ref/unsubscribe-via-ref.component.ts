import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeResponse } from 'src/app/interfaces/fake-response.interface';
import { ExampleHttpService } from 'src/app/services/example-http.service';

@Component({
	selector: 'app-unsubscribe-via-ref',
	templateUrl: './unsubscribe-via-ref.component.html',
	styleUrls: ['./unsubscribe-via-ref.component.scss'],
})
export class UnsubscribeViaRefComponent implements OnInit, OnDestroy {
	serviceOutput: FakeResponse[];

	constructor(private exampleHttpService: ExampleHttpService) {}

	private subscription: Subscription;

	ngOnInit(): void {
		this.subscription = this.exampleHttpService.getFakeData().subscribe((fakeResponses: FakeResponse[]) => {
			this.serviceOutput = fakeResponses;
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
		this.subscription = null;
	}
}
