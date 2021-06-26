import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { NewsDetectionComponent } from './components/news-detection/news-detection.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsComponent,
    HeaderComponent,
    NewsDetailsComponent,
    FooterComponent,
    AllNewsComponent,
    SentimentAnalysisComponent,
    NewsDetectionComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    // CarouselModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class NewsModule { }
