import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeResponse } from 'src/app/interfaces/fake-response.interface';
import { ExampleHttpService } from 'src/app/services/example-http.service';

@Component({
	selector: 'app-unsubscribe-via-pipe',
	templateUrl: './unsubscribe-via-pipe.component.html',
	styleUrls: ['./unsubscribe-via-pipe.component.scss'],
})
export class UnsubscribeViaPipeComponent implements OnInit {
	serviceOutput$: Observable<FakeResponse[]>;

	constructor(private exampleHttpService: ExampleHttpService) {}

	ngOnInit(): void {
		this.serviceOutput$ = this.exampleHttpService.getFakeData();
	}
}
