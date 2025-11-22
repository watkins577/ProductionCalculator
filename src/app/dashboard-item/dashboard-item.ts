import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
})
export class DashboardItem {}

@Component({
  selector: 'dashboard-item-content',
  imports: [],
  template: `<ng-content>dashboard-item-content</ng-content>`,
})
export class DashboardItemContent {}

@Component({
  selector: 'dashboard-item-title',
  imports: [],
  template: `<ng-content>dashboard-item-title</ng-content>`,
})
export class DashboardItemTitle {}
