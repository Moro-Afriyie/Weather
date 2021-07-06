import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoaderService } from 'src/interceptors/loader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private loaderService:LoaderService,) {
   }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup){
    console.log(form);
  }
}
