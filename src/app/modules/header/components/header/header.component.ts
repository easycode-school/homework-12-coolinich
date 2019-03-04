import { Component, OnInit, Input } from '@angular/core';
import { AuthGlobalService } from 'src/app/services/auth-global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() authUserId: string;
  public activeTab = '';
  constructor(
  ) { }

  ngOnInit() {
  }

}
