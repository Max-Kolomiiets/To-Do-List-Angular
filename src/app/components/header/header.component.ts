import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = "To Do List App";
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router) {
    this.subscription = this.uiService.ontoggle().subscribe(
      val => this.showAddTask = val
    )
   }

  ngOnInit(): void {
  }

  toggleAddTask() {  
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
