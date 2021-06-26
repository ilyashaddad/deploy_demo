import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-detection',
  templateUrl: './news-detection.component.html',
  styleUrls: ['./news-detection.component.scss']
})
export class NewsDetectionComponent implements OnInit {
  data: any;
  request: string = '';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private NewsService: NewsService) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('new', this.request);

    this.NewsService.check(this.request).subscribe((res: any) => {
      this.data = { news: this.request, response: res };
    },
      (error: any) => {
        console.log('error', error);
      });
  }

}
