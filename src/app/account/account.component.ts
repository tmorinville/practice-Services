import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  providers: []
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // this.loggingService.logStatusChange(status);
    // console.log(`A status change occured, the new status is ${status}`);
  }
}
