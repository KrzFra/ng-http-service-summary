import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeViaRefComponent } from './unsubscribe-via-ref.component';

describe('UnsubscribeViaRefComponent', () => {
	let component: UnsubscribeViaRefComponent;
	let fixture: ComponentFixture<UnsubscribeViaRefComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UnsubscribeViaRefComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UnsubscribeViaRefComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
