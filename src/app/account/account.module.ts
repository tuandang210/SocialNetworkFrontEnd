import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {AccountUpdateComponent} from './account-update/account-update.component';
import {AccountListComponent} from './account-list/account-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AccountUpdateComponent,
    AccountListComponent
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AccountModule {
}