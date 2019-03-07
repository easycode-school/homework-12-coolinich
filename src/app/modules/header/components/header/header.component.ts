import { Component, OnInit, Input } from '@angular/core';
import { AuthGlobalService } from 'src/app/services/auth-global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() authUserId: string;
  public activeTab = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(id: string) {
    console.log(this.authUserId);
    this.router.navigate([`/users/${this.authUserId}`]);
  }

}
