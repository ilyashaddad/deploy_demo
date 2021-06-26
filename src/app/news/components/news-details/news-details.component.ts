import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  data: any;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private NewsService: NewsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.NewsService.getNews_by_ID(this.activateRoute.snapshot.params['id']).subscribe((res: any) => {
      this.data = res.data.new;
      console.log(this.data);
    });
  }

}
