import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';
import { Utilities } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isLoading: boolean = false;
  constructor(
    private httpService: HttpService,
    private utilities: Utilities,
    private router: Router
  ) {}

  ngOnInit() {
    this.httpService.isLoading.subscribe((value) => {
      this.isLoading = value;
    });
  }
}
