import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';
@Component({
  selector: 'app-header',
  template: ` <div class="home-container">
    <span *ngIf="type !== 1" class="span-text" (click)="goToHome()"
      >Go to home</span
    >
    <span class="span-text" (click)="logout()">Logout</span>
  </div>`,
})
export class MainComponent {
  @Input('type') type: any = 0;
  constructor(private router: Router, private httpService: HttpService) {}

  ngOnInit() {}
  goToHome() {
    this.router.navigateByUrl('/addTemplate');
  }

  logout() {
    this.httpService.isLoading.next(true);
    localStorage.clear();
    setTimeout(() => {
      this.httpService.isLoading.next(false);
      this.router.navigateByUrl('/register');
    }, 2000);
  }
}
