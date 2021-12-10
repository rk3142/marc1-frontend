import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Utilities } from '../services/utilities.service';
declare const config: any;
@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css'],
})
export class AddTemplateComponent implements OnInit {
  dataTypes = config.type;
  showTemplate = false;
  fieldDataList = [
    {
      field_name: '',
      field_type: config.type[0].id,
      fieldType: config.type[0],
      expected_values: '',
    },
  ];
  constructor(
    private httpService: HttpService,
    private router: Router,
    private utilities: Utilities
  ) {}

  ngOnInit() {}

  onAddClick() {
    this.showTemplate = true;
    this.clearData();
  }

  clearData() {
    this.fieldDataList = [
      {
        field_name: '',
        field_type: config.type[0].id,
        fieldType: config.type[0],
        expected_values: '',
      },
    ];
  }

  onTypeChange(index) {
    this.fieldDataList[index].field_type =
      this.fieldDataList[index].fieldType.id;
  }

  addMorField(index) {
    this.fieldDataList.push({
      field_name: '',
      field_type: config.type[0].id,
      fieldType: config.type[0],
      expected_values: '',
    });
  }

  deleteField(index) {
    const temp = Object.assign([], this.fieldDataList);
    temp.splice(index, 1);
    this.fieldDataList = Object.assign([], temp);
  }

  saveTemplate() {
    this.httpService
      .customServicePost(
        'saveTemplate',
        {
          inputs: this.fieldDataList,
          endpoints: config.endPoints,
        },
        true,
        this.utilities.getUuid() + '/create_form'
      )
      .subscribe(
        (data) => {
          this.fieldDataList = [
            {
              field_name: '',
              field_type: config.type[0].id,
              fieldType: config.type[0],
              expected_values: '',
            },
          ];
          this.showTemplate = false;
        },
        (error) => {}
      );
  }

  onViewClick() {
    this.router.navigate(['/viewTemplate']);
  }
}
