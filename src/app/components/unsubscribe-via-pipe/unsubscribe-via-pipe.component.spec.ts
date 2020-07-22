import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeViaPipeComponent } from './unsubscribe-via-pipe.component';

describe('UnsubscribeViaPipeComponent', () => {
	let component: UnsubscribeViaPipeComponent;
	let fixture: ComponentFixture<UnsubscribeViaPipeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UnsubscribeViaPipeComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UnsubscribeViaPipeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
