import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeViaEventComponent } from './unsubscribe-via-event.component';

describe('UnsubscribeViaEventComponent', () => {
	let component: UnsubscribeViaEventComponent;
	let fixture: ComponentFixture<UnsubscribeViaEventComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UnsubscribeViaEventComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UnsubscribeViaEventComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
