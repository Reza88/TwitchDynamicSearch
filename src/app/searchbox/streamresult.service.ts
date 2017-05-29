import { Streamresult } from './streamresult.model';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
 
@Injectable()
export class StreamresultService{
    TWITCH_API_KEY:string = 'qyxrk320s0583sbi4tcnhcsq01n82jm'; 
    TWITCH_API_URL:string = 'https://api.twitch.tv/kraken/search/streams';
    LIMIT:string = '10'; 

    constructor(private http:Http){}

    search(query:string){
        let params:string = [
            `client_id=${this.TWITCH_API_KEY}`,
            `q=${query}`,
            `limit=${this.LIMIT}`
            ].join('&'); 
        let queryUrl: string = `${this.TWITCH_API_URL}?${params}`; 
        return this.http.get(queryUrl)
        .map((response:Response)=>{
            return (<any>response.json()).streams.map(stream=>{
                return new Streamresult({
                    game: stream.channel.game, 
                    status:stream.channel.status, 
                    display_name:stream.channel.display_name, 
                    language:stream.channel.language, 
                    viewers:stream.viewers, 
                    followers:stream.channel.followers, 
                    logo:stream.preview.medium,
                    url:stream.channel.url
                });
            });
        })
        .catch(this.handleServerError); 
    };

    private handleServerError(error:Response){
        return Observable.throw(error.json().message); 
    }

}









//https://api.twitch.tv/kraken/search/streams?client_id=qyxrk320s0583sbi4tcnhcsq01n82jm&q=starcraft&limit=10