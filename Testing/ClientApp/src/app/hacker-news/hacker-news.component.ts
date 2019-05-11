import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackerNewsService } from './hacker-news.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html'
})

export class HackerNewsComponent {
  // Display title and author of article. Title should have link to actual article.
  private newsArticles: Observable<HackerNewsArticle[]>;

  constructor(private hackerNews: HackerNewsService) {}

  ngOnInit() {
    this.hackerNews.getTopStories().subscribe(results => {
      this.newsArticles = results;
    })
  }
}

interface HackerNewsArticle {
  id: number;
  title: string;
  by: string;
  url: string;
  decendents: number;
  kids: number[];
  score: number;
  time: number;
  type: string;
}
