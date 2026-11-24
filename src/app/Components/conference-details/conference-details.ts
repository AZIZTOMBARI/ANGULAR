import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  @Input() conference: Conference | null = null;
}
