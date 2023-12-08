import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any[] = [
    {
      question: 'Quelle est la principale cause du changement climatique ?',
      options: ['Les activités humaines', 'Les cycles naturels', 'Les éruptions volcaniques'],
      correctAnswer: 'Les activités humaines'
    },
    {
      question: 'Quelle est une solution pour réduire les émissions de gaz à effet de serre ?',
      options: ['Utiliser les énergies renouvelables', 'Augmenter la déforestation', 'Utiliser davantage de combustibles fossiles'],
      correctAnswer: 'Utiliser les énergies renouvelables'
    },
    // Ajoutez d'autres questions selon votre besoin
  ];

  userAnswers: string[] = [];
  score: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

    submitQuiz(): void {
      this.score = 0;
      for (let i = 0; i < this.questions.length; i++) {
        const userAnswer = this.userAnswers[i];
        const correctAnswer = this.questions[i].correctAnswer;

        if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          this.score++;
        }
      }
    }

}
