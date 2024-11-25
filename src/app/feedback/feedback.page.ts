import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { ToastController } from '@ionic/angular'; // Import ToastController

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedbacks: any[] = [];
  newFeedback: { rating: number | null; message: string } = {
    rating: null,
    message: '',
  };
  userId: string = 'id'; // Replace with the actual user ID (e.g., from authentication).

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.loadUserFeedback();
  }

  loadUserFeedback() {
    this.feedbackService.getFeedbackByUserId(this.userId).subscribe((data) => {
      this.feedbacks = data;
    });
  }

  submitFeedback() {
    const feedback = {
      userId: this.userId,
      rating: this.newFeedback.rating,
      message: this.newFeedback.message,
      reply: '',
    };

    this.feedbackService.addFeedback(feedback).subscribe(() => {
      // Clear the form after submission
      this.newFeedback = { rating: null, message: '' };
      // Reload the feedbacks to reflect the newly submitted feedback
      this.loadUserFeedback();
    });
  }
}
