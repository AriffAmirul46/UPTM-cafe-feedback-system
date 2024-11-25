import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  feedbacks: any[] = [];

  constructor(private feedbackService: FeedbackService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loadAllFeedback();
  }

  loadAllFeedback() {
    this.feedbackService.getAllFeedback().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  submitReply(feedback: any, index: number) {
    this.feedbackService.updateFeedback(feedback.id, feedback.reply).subscribe(
      () => {
        console.log('Reply submitted successfully!');
      },
      (error) => {
        console.error('Error submitting reply:', error);
      }
    );
  }
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error('Logout error:', error);
    });
    console.log('HomePage Loaded');
  }
}
