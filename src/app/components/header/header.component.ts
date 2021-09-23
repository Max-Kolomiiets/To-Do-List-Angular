import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = "To Do List App";
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.ontoggle().subscribe(
      val => this.showAddTask = val
    )
   }

  ngOnInit(): void {
  }
  toggleAddTask() {
    console.log('gg');
    
    this.uiService.toggleAddTask();
  }
}
