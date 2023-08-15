import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css'],
})
export class ShowUserComponent implements OnInit {
  users: any[] = [];

  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data: any) => {
      this.users = data;
    });
  }
}
