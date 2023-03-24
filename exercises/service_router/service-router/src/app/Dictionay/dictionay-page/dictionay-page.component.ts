import { Component, OnInit } from '@angular/core';
import {IWord} from "../../model/iword";
import {DictionaryServiceService} from "../../service/dictionary-service.service";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  words: IWord[];
  constructor(private wordService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.words = this.wordService.getAll();
  }
}
