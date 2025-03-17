import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/ui-alert-helm';
import {NgIcon} from '@ng-icons/core';
import {HlmIconDirective} from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIcon, HlmAlertTitleDirective, HlmAlertIconDirective, HlmIconDirective, HlmAlertDescriptionDirective, HlmAlertDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
