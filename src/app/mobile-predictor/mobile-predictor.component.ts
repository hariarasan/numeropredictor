import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PredictorService } from './../predictor.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-mobile-predictor',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, CommonModule, FormsModule],
  templateUrl: './mobile-predictor.component.html',
  styleUrl: './mobile-predictor.component.css'
})
export class MobilePredictorComponent {
  mobileNumber: string = '';
  dataMap: { [key: string]: string } = {};
  dataEntries: [string, string][] = [];

  constructor(private predictorService: PredictorService) {}

  submit() {
    if (this.mobileNumber.match(/^\d{10}$/)) {
      this.predictorService.sendMobileNumber(this.mobileNumber).subscribe({
        next: (res) => {
          console.log('Success:', res);
          this.dataMap = res;
          console.log(this.dataMap)
          this.dataEntries = Object.entries(res['predictionResponseMap'])
          console.log(this.dataEntries)
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
    }
  }
}
