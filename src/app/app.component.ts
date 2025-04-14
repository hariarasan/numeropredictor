import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MobilePredictorComponent } from './mobile-predictor/mobile-predictor.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobilePredictorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'numeropredictor';
}
