import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { UnsubscribeViaEventComponent } from './components/unsubscribe-via-event/unsubscribe-via-event.component';
import { UnsubscribeViaPipeComponent } from './components/unsubscribe-via-pipe/unsubscribe-via-pipe.component';
import { UnsubscribeViaRefComponent } from './components/unsubscribe-via-ref/unsubscribe-via-ref.component';

@NgModule({
	declarations: [
		AppComponent,
		SubjectsComponent,
		UnsubscribeViaRefComponent,
		UnsubscribeViaEventComponent,
		UnsubscribeViaPipeComponent,
	],
	imports: [BrowserModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
