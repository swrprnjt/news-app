import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public showFullVendorList = JSON.parse(
    window.localStorage.getItem('showFullVendorList')
  );
  public showBackToTop = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.scrollTop();
    });

    window.addEventListener('scroll', () => this.onScroll());
  }

  public toggleShow(): void {
    this.showFullVendorList = !this.showFullVendorList;
    if (this.showFullVendorList) {
      window.localStorage.setItem('showFullVendorList', 'true');
    } else {
      window.localStorage.setItem('showFullVendorList', 'false');
    }
  }

  public onScroll(): void {
    this.showBackToTop = window.scrollY > 600;
  }

  public scrollTop(): void {
    window.scrollTo(0, 0);
  }
}
