import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;
  displayName: any;
  email: string = '';
  constructor(
    private observerService: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    let name = JSON.parse(sessionStorage.getItem('user')!);
    name = name.displayName;
    this.email = name.email;
    this.displayName = name;
  }
  ngAfterViewInit(): void {
    this.observerService.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
    this.cd.detectChanges();
  }

  logoutUser() {
    this.router.navigate(['/auth/login']);
  }
}
