import { Component, OnInit } from '@angular/core';
import {IWord} from "../../model/iword";
import {DictionaryServiceService} from "../../service/dictionary-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;

  constructor(private wordService: DictionaryServiceService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.word = this.wordService.findById(id);
  }

}
