import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export type tweet = {
  message: string;
  user: string;
  avatarUrl: string;
  liked: boolean;
  id: number;
};

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  apiUrl = "https://vision-tweet-backend.herokuapp.com/tweets";

  constructor(private http: HttpClient) {
  }

  getTweets(): Promise<tweet[]> {
    return this.http.get<tweet[]>(this.apiUrl).toPromise();
  }

  addTweet(tweet: tweet): Promise<tweet> {
    return this.http.post<tweet>(this.apiUrl, tweet).toPromise();
  }

  deleteTweet(id: number): Promise<number> {
    return this.http.delete<number>(this.apiUrl + '/' + id).toPromise();
  }
}
