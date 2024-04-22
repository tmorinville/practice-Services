import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LoggingService]
})
export class AppComponent {
  accounts: {name:string, status:string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

}
