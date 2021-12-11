import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Utilities } from '../services/utilities.service';
declare const config: any;
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  fieldDataList = [];
  formId: any;
  showTemplate = false;
  disableField = false;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
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
              item.field_value = '';
            });
            this.fieldDataList = data.template;
          } else {
            this.showTemplate = false;
          }
        },
        (error) => {
          this.showTemplate = false;
        }
      );
  }

  saveUserData() {
    this.fieldDataList.forEach((item) => {
      item.field_value =
        item.field_type === config.checkType
          ? parseInt(item.field_value)
          : item.field_value;
    });
    this.httpService
      .customServicePost(
        'saveUserData',
        {
          form_id: this.formId,
          submission_data: this.fieldDataList,
        },
        true
      )
      .subscribe(
        (data) => {
          this.disableField = true;
        },
        (error) => {}
      );
  }
}
