import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, FormsModule, NgClass, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchTerm = '';
  @Output() conferenceSelected = new EventEmitter<Conference>();

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular et le développement moderne',
      description: 'Découvrez les nouveautés d Angular 21.',
      date: new Date(2026, 9, 15, 9, 30),
      place: 'Amphithéâtre A',
      maxParticipants: 50,
      nbParticipants: 35,
    },
    {
      id: 2,
      title: 'Les bonnes pratiques TypeScript',
      description: 'Améliorez la qualité et la maintenabilité de vos applications.',
      date: new Date(2026, 10, 4, 14, 0),
      place: 'Salle B12',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Architecture des applications web',
      description: 'Une conférence dédiée aux architectures robustes et évolutives.',
      date: new Date(2026, 11, 2, 10, 0),
      place: 'Salle C03',
      maxParticipants: 20,
      nbParticipants: 20,
    },
  ];

  get filteredConferences(): Conference[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.conferences.filter((conference) =>
      conference.title.toLowerCase().includes(term),
    );
  }

  getRemainingPlaces(conference: Conference): number {
    return Math.max(conference.maxParticipants - conference.nbParticipants, 0);
  }

  getAvailabilityClass(conference: Conference): string {
    const remainingPlaces = this.getRemainingPlaces(conference);
    if (remainingPlaces === 0) {
      return 'sold-out';
    }
    return remainingPlaces < 10 ? 'limited' : 'available';
  }

  register(conference: Conference): void {
    if (this.getRemainingPlaces(conference) > 0) {
      conference.nbParticipants += 1;
    }
  }

  selectConference(conference: Conference): void {
    this.conferenceSelected.emit(conference);
  }
}
