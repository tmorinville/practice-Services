import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private loggingService: LoggingService) { }

  addAccount(name:string, status:string){
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(index:number, newStatus:string){
    this.accounts[index].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
