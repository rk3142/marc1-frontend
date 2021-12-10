import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Utilities } from '../services/utilities.service';
@Component({
  selector: 'app-template-list',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.css'],
})
export class ViewTemplateComponent implements OnInit {
  formList = [];
  constructor(
    private router: Router,
    private httpService: HttpService,
    private utilities: Utilities
  ) {}

  ngOnInit() {
    this.httpService
      .customServiceGet(
        'viewTemplates',
        {},
        true,
        this.utilities.getUuid() + '/form'
      )
      .subscribe(
        (data) => {
          if (data && data.forms && data.forms.length > 0) {
            data.forms.forEach((item, index) => {
              this.formList.push({
                name: 'Template ' + (index + 1),
                formId: item.split('/')[3],
                value: item,
              });
            });
          } else {
            this.formList = [];
          }
        },
        (error) => {}
      );
  }

  addUserData(index) {
    this.router.navigate(['/userData'], {
      queryParams: {
        id: this.formList[index].formId,
      },
      replaceUrl: false,
    });
  }

  editTemplateData(index) {
    this.router.navigate(['/editTemplate'], {
      queryParams: {
        id: this.formList[index].formId,
      },
      replaceUrl: false,
    });
  }

  viewTemplateData(index) {
    this.router.navigate(['/viewUserData'], {
      queryParams: {
        id: this.formList[index].formId,
      },
      replaceUrl: false,
    });
  }
}
