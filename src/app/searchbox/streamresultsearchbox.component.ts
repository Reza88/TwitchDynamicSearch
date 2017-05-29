import { Observable } from 'rxjs';
import { Streamresult } from './streamresult.model';
import { Component, ElementRef, OnInit,EventEmitter,Output } from '@angular/core';
import {StreamresultService} from './streamresult.service';

@Component({
    selector:'my-searchbox', 
    template:`
    <div class="container">
    <input type="text" class="form-control" placeholder="Search streamer...">
</div>`
})
export class StreamresultsearchboxComponent implements OnInit{
    constructor(private searchUserservice:StreamresultService,
    private el:ElementRef){}

    @Output()
    loading: EventEmitter<boolean> = new EventEmitter<boolean>(); 

    @Output()
    results: EventEmitter<Streamresult[]> = new EventEmitter<Streamresult[]>(); 

   ngOnInit():void{
    Observable.fromEvent(this.el.nativeElement, 'keyup')
        .map((e:any)=>e.target.value)
        .filter((text:string)=>text.length>1)
        .debounceTime(250)
        .do(()=> this.loading.emit(true))
        .map((query:string)=>this.searchUserservice.search(query))
        .switch()
        .subscribe
        (
            (results:Streamresult[])=>{
            this.loading.emit(false); 
            this.results.emit(results); 
            console.log(results); 
        }, 
        (err:any)=>{
            console.log(err); 
            this.loading.emit(false); 
        }, 
        ()=>{
            this.loading.emit(false); 
        }
        );
 }
}