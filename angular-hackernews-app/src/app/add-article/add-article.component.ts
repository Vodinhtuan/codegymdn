import { Component, OnInit } from '@angular/core';
import {ArticleComponent} from "../article/article.component";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleComponent: ArticleComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
