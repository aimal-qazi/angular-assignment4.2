import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowUserComponent } from './show-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShowUserComponent,
      },
    ]),
  ],
})
export class UsersModule {}
