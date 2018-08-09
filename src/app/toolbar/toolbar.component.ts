import { Component, OnInit } from '@angular/core';
import { MsalService } from 'agri-msal-angular';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private _authenticated: boolean;
  constructor(private msalService: MsalService) { }

  ngOnInit() {
    from(this.msalService.authenticated).subscribe((data) => {
      this._authenticated = data;
    });
  }

  login() {
    this.msalService.login();
  }

  logout() {
    this.msalService.logout();
  }

  get authenticated(): boolean {
    return this._authenticated; // from(this.msalService.authenticated);
  }
}
