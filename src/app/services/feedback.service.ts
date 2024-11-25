import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private feedbacks = [
    { id: 1, userId: 'user123', rating: 5, message: 'Great app!', reply: '' },
    { id: 2, userId: 'user456', rating: 4, message: 'Good service!', reply: '' },
  ];

  constructor() {}

  getFeedbackByUserId(userId: string): Observable<any[]> {
    return of(this.feedbacks.filter((feedback) => feedback.userId === userId));
  }

  addFeedback(feedback: any): Observable<void> {
    const newId = this.feedbacks.length > 0 ? this.feedbacks[this.feedbacks.length - 1].id + 1 : 1;
    feedback.id = newId;
    this.feedbacks.push(feedback);
    return of();
  }

  getAllFeedback(): Observable<any[]> {
    return of(this.feedbacks);
  }

  updateFeedback(id: number, reply: string): Observable<void> {
    const feedback = this.feedbacks.find((f) => f.id === id);
    if (feedback) {
      feedback.reply = reply;
    }
    return of();
  }
}
