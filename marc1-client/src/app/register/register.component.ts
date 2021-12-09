import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.customServiceGet('healthCheck', {}, false).subscribe(
      (data) => {},
      (error) => {}
    );
  }

  onBtnClick() {
    this.httpService.customServiceGet('getAPIKey', {}, true).subscribe(
      (data) => {
        localStorage.setItem('apiKey', data['API-KEY'].toString());
        localStorage.setItem('uuid', data['uuid'].toString());
        this.router.navigate(['/addTemplate']);
      },
      (error) => {}
    );
  }

}
