import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  data: any;
  thematic: string = '';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private NewsService: NewsService) { }

  ngOnInit(): void {

    this.NewsService.getNews().subscribe((res: any) => {
      this.data = res.data.allnews;
      this.thematic = this.data[0].thematic;
      console.log('res', res);
    },
      (error: any) => {
        console.log('error', error);
      });
  }


}
