import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  // --- Form States (Signals for Login/Register) ---
  email = signal<string>('');
  password = signal<string>('');
  confirmPassword = signal<string>(''); // New state for registration
  errorMessage = signal<string | null>(null);
  isLoading = signal<boolean>(false);
  viewMode = signal<'login' | 'register'>('login'); // State to toggle view
  isPasswordVisible = signal<boolean>(false); // NEW: State to track password visibility
  
  // --- Utility States ---
  currentYear = signal<number>(new Date().getFullYear());

  constructor(private authService:AuthService) {
    console.log("Pure UI Login/Register Component Initialized.");
  }

  /**
   * Toggles the visibility state of the password fields.
   */
  togglePasswordVisibility() {
    this.isPasswordVisible.update(visible => !visible);
  }

  /**
   * Handles the form submission with UI-only simulation.
   */
  handleFormSubmission() {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const mode = this.viewMode();

    // --- UI-Only Logic Simulation ---
    // Simulate network delay and visual feedback
    setTimeout(() => {
        let message = '';
        
        if (mode === 'register') {
          if (this.password() !== this.confirmPassword()) {
            this.errorMessage.set('Passwords do not match.');
            this.isLoading.set(false);
            return;
          }
          // Simple mock validation
          if (this.email() === 'fail@register.com') {
            message = 'UI Error: Registration failed due to policy violation.';
          } else {
            message = 'UI Success: Account registered and session started.';
          }
        } else { // mode === 'login'
          if (this.email() === 'error@test.com' || this.password() === 'wrong') {
            message = 'UI Error: Invalid credentials simulated.';
          } else {
            message = 'UI Success: Login validated and session started.';
          }
        }

        if (message.startsWith('UI Error')) {
            this.errorMessage.set(message.replace('UI Error: ', ''));
        } else {
            this.errorMessage.set(null);
        }

        this.isLoading.set(false);
        this.email.set('');
        this.password.set('');
        this.confirmPassword.set('');
        console.log(`UI Mock ${mode} Completed.`);
    }, 1500); // Simulate network delay
  }

  /**
   * Toggles the view between Login and Register forms, and clears state.
   */
  toggleForm() {
    this.viewMode.update(currentMode => currentMode === 'login' ? 'register' : 'login');
    this.errorMessage.set(null); // Clear errors on toggle
    this.email.set('');
    this.password.set('');
    this.confirmPassword.set('');
    this.isLoading.set(false);
  }
}
