import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Utilities } from '../services/utilities.service';
declare const config: any;
@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css'],
})
export class EditTemplateComponent implements OnInit {
  dataTypes = config.type;
  fieldDataList = [];
  formId: any;
  showTemplate = false;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private utilities: Utilities
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.formId = params['id'] ? params['id'] : '';
      if (this.formId) {
        this.getTemplateData();
      }
    });
  }

  getTemplateData() {
    this.httpService
      .customServiceGet(
        'getTemplateData',
        {},
        true,
        this.formId + '/get_template'
      )
      .subscribe(
        (data) => {
          if (data.template && data.template.length > 0) {
            this.showTemplate = true;
            data.template.forEach((item, index) => {
              item.fieldType = config.type.filter(
                (x) => x.id === item.field_type
              )[0];
            });
            this.fieldDataList = data.template;
          } else {
            this.showTemplate = false;
          }
        },
        (error) => {}
      );
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
    this.fieldDataList.splice(index, 1);
  }

  saveTemplate() {
    const uuid = localStorage.getItem('uuid')
      ? localStorage.getItem('uuid')
      : null;
    this.httpService
      .customServicePut(
        'editTemplate',
        {
          inputs: this.fieldDataList,
          endpoints: config.endPoints,
        },
        true,
        uuid + '/' + this.formId
      )
      .subscribe(
        (data) => {
          this.location.back();
        },
        (error) => {}
      );
  }

  onViewClick() {
    this.router.navigate(['/viewTemplate']);
  }
}
