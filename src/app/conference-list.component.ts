import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from './Models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './conference-list.component.html',
  styleUrl: './conference-list.component.css',
})
export class ConferenceListComponent {
  searchTerm = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular et le développement moderne',
      description: 'Découvrez les nouveautés d’Angular 21.',
      date: new Date('2026-12-10T09:00:00'),
      place: 'Amphithéâtre A',
      maxParticipants: 50,
      nbParticipants: 32,
    },
    {
      id: 2,
      title: 'Les bonnes pratiques TypeScript',
      description: 'Écrivez un code TypeScript robuste et maintenable.',
      date: new Date('2026-12-17T14:00:00'),
      place: 'Salle B12',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'UX et accessibilité web',
      description: 'Concevez des interfaces accessibles à tous.',
      date: new Date('2027-01-08T10:30:00'),
      place: 'Salle C04',
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

  remainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  register(conference: Conference): void {
    if (this.remainingPlaces(conference) > 0) {
      conference.nbParticipants++;
    }
  }
}
