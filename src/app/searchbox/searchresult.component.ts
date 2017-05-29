import { Streamresult } from './streamresult.model';
import { Component,Input } from '@angular/core';
@Component({
    selector:'search-result', 
    template:`
    <div class="container">
    <div class="list-group">
        <a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">{{result.display_name}} - {{result.status}}</h4>
            {{result.url}}
            <div class="row">
                <div class="col-xs-18 col-sm-3">
                    <img src="{{result.logo}}" class="logo">
                </div>
            </div>
        </a>
        <a class="list-group-item">
            <p class="list-group-item-text">
                <b>Viewers</b>: {{result.viewers}}
                <b>Game</b>: {{result.game}}
                <b>Language</b>: {{result.language}}
            </p>
        </a>
    </div>
</div>
`, 
    styles:[`
.logo {
    max-width: 100% !important;
    height: auto;
    display: block;
}
ul {
    list-style-type: none;
}
    `]  
})
export class SearchresultComponent{
    @Input()
    result:Streamresult
}