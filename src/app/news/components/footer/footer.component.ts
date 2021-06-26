import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  data: any[] = [];
  thematic: string = '';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private NewsService: NewsService) { }

  ngOnInit(): void {

    this.NewsService.getNews().subscribe((res: any) => {
      for (let i = 0; i < 3; i++) {
        this.data.push(res.data.allnews[i]);
      }
      console.log('res', this.data);
    },
      (error: any) => {
        console.log('error', error);
      });
  }

}
