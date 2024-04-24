import { Component, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  providers: []
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  para:string = "";

  constructor(private accountsService: AccountsService) {
    // this.loggingService = logSer;
  }

  ngOnInit(){
    this.accountsService.statusUpdated.subscribe(
      (data:string) => this.para = data
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus);
    // console.log(`A status change occured, the new status is ${accountStatus}`);
  }
}
