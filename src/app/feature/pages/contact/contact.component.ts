import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  timestamp: any;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  // State Signals (Mock Data for UI display)
  contacts = signal<Contact[]>([
    {
      id: '1',
      name: 'Alice Smith',
      phone: '555-1234',
      email: 'alice@example.com',
      timestamp: new Date(),
    },
    {
      id: '2',
      name: 'Bob Johnson',
      phone: '555-0192',
      email: 'bob@web.dev',
      timestamp: new Date(),
    },
    {
      id: '3',
      name: 'Charlie Brown',
      phone: '555-9876',
      email: 'charlie@web.dev',
      timestamp: new Date(),
    },
    {
      id: '4',
      name: 'Dana Scully',
      phone: '555-4040',
      email: 'dana.scully@fbi.gov',
      timestamp: new Date(),
    },
    {
      id: '5',
      name: 'Fox Mulder',
      phone: '555-XFILES',
      email: 'fox.mulder@fbi.gov',
      timestamp: new Date(),
    },
  ]);
  newContactName = signal<string>('');
  newContactPhone = signal<string>('');
  newContactEmail = signal<string>('');
  currentUserId = signal<string>('SYS_ADMIN_7890');
  currentYear = signal<number>(new Date().getFullYear());

  constructor() {
    console.log('Advanced UI-Only App Component Initialized.');
  }

  // Utility function to generate initials (e.g., "Aman Tripathi" -> "AT")
  getInitials(name: string): string {
    if (!name) return '';
    const parts = name
      .trim()
      .split(/\s+/)
      .filter((p) => p.length > 0);
    let initials = '';

    if (parts.length > 0) {
      // Always take the first initial of the first word
      initials += parts[0].charAt(0).toUpperCase();

      // If there's more than one word, take the first initial of the last word
      if (parts.length > 1) {
        initials += parts[parts.length - 1].charAt(0).toUpperCase();
      }
    }
    return initials;
  }

  // --- Mock/Placeholder Methods ---

  addContact(): void {
    console.log('Mock: Adding contact (No backend action)');
    // Clear all three fields
    this.newContactName.set('');
    this.newContactPhone.set('');
    this.newContactEmail.set('');
  }

  editContact(id: string): void {
    console.log(`Mock: Editing contact with ID: ${id} (No backend action)`);
  }

  deleteContact(id: string): void {
    console.log(`Mock: Deleting contact with ID: ${id} (No backend action)`);
    // In a real app, this would delete the contact from the database
  }
}
