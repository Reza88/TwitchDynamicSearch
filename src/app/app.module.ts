import { StreamresultService } from './searchbox/streamresult.service';
import { TwitchsearchstreamComponent } from './searchbox/twitchsearchstream.component';
import { StreamresultsearchboxComponent } from './searchbox/streamresultsearchbox.component';
import { SearchresultComponent } from './searchbox/searchresult.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchresultComponent,
    StreamresultsearchboxComponent,
    TwitchsearchstreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StreamresultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
