import { Component, signal } from '@angular/core';
import { Header } from './Components/header/header';
import { Friends } from './Components/friends/friends';
import { Footer } from './Components/footer/footer';
import { Notifications } from './Components/notifications/notifications';
import { Navbar } from './Components/navbar/navbar';
import { Profil } from './Components/profil/profil';
import { ConferenceList } from './Components/conference-list/conference-list';
import { ConferenceDetails } from './Components/conference-details/conference-details';
import { Conference } from './Models/conference';


@Component({
  selector: 'app-root',
  imports: [Header, Friends, Footer, Navbar, Notifications, Profil, ConferenceList, ConferenceDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedConference: Conference | null = null;

  onConferenceSelected(conference: Conference): void {
    this.selectedConference = conference;
  }
}
