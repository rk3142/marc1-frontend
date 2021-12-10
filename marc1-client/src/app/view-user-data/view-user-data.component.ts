import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Utilities } from '../services/utilities.service';
@Component({
  selector: 'app-view-user-data',
  templateUrl: './view-user-data.component.html',
  styleUrls: ['./view-user-data.component.css'],
})
export class ViewUserDataComponent implements OnInit {
  userDataList = [];
  formId: any;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private utilities: Utilities
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.formId = params['id'] ? params['id'] : '';
      if (this.formId) {
        this.getUserData();
      }
    });
  }

  getUserData() {
    this.httpService
      .customServiceGet(
        'getUserData',
        {},
        true,
        this.utilities.getUuid() + '/' + this.formId + '/response'
      )
      .subscribe(
        (data) => {
          if (data && data.length > 0) {
            for (let i = 0; i < data.length; i++) {
              this.userDataList.push({
                name: i + 1,
                templateData: data[i],
              });
            }
          }
        },
        (error) => {}
      );
  }
}
