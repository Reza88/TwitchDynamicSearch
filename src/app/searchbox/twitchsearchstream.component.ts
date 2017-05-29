import { Streamresult } from './streamresult.model';
import { Component } from '@angular/core';


@Component({
    selector: 'twitch-search',
    template: `
    <div class="container">
        <div class="page-header">
         <h1>Twitch Search</h1>
       </div>

    <div class="row">
        <div class="input-group input-group-lg col-md-12">
        <my-searchbox (loading)="loading = $event"
                      (results)="updateResults($event)">
        </my-searchbox>
        </div>
    </div>

    <div class="row">
        <search-result
            *ngFor="let result of results"
            [result]="result">
        </search-result>
        </div>
    </div>
    `
})
export class TwitchsearchstreamComponent{
    results : Streamresult[]; 

    updateResults(results:Streamresult[]):void{
        this.results=results; 
    }

}