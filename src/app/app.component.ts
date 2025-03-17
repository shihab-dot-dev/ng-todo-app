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
import {HlmAccordionDirective, HlmAccordionImports, HlmAccordionItemDirective} from '@spartan-ng/ui-accordion-helm';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIcon, HlmAlertTitleDirective, HlmAlertIconDirective, HlmIconDirective, HlmAlertDescriptionDirective, HlmAlertDirective, HlmAccordionDirective, HlmAccordionItemDirective, HlmAccordionImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
