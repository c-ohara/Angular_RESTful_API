import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.css']
})
export class InteractiveComponent implements OnInit {
  @Input() taskToShow: any;
  constructor() { }
  ngOnInit() {}
}
