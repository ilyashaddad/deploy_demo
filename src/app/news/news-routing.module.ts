import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { NewsDetectionComponent } from './components/news-detection/news-detection.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'news-details/:id',
    component: NewsDetailsComponent
  },
  {
    path: 'all-news',
    component: AllNewsComponent
  },
  {
    path: 'sentiment-analysis',
    component: SentimentAnalysisComponent
  },
  {
    path: 'news-detection',
    component: NewsDetectionComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
