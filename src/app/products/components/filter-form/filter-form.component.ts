import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { faFilter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  faFilter = faFilter;

  form: FormGroup = new FormGroup({
    status: new FormControl('true'),
    min: new FormControl(''),
    max: new FormControl(''),
    stock: new FormControl('')
  });

  constructor() { }

  ngOnInit() {}

}
