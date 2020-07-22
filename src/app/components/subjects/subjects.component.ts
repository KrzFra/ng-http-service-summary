import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
	selector: 'app-subjects',
	templateUrl: './subjects.component.html',
	styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent {
	subject = new Subject<string>();

	subscriptions: Subscription[] = [];

	subscribe() {
		console.log('subscribe');

		const sub = this.subject.subscribe((value: string) => {
			console.log('subscription happened', value);
		});

		this.subscriptions.push(sub);
	}

	next() {
		console.log('next');
		this.subject.next('next value');
	}

	complete() {
		console.log('complete');
		this.subject.complete();
	}

	unsubscribe() {
		console.log('unsubscribe');
		this.subscriptions.forEach((s) => {
			s.unsubscribe();
		});
	}
}
