import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  data: any;
  thematic: string = '';

  // tslint:disable-next-line: no-shadowed-variable
  constructor() { }

  ngOnInit(): void {}
}
