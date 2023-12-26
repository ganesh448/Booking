import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-create-train-component',
  templateUrl: './create-train-component.component.html',
  styleUrl: './create-train-component.component.css',
})
export class CreateTrainComponentComponent implements OnInit {
  train: Train = new Train();

  constructor(private trainService: TrainService, private router: Router) {}
  ngOnInit(): void {}
  saveTrain() {
    this.trainService.createTrain(this.train).subscribe((data) => {
      console.log(data);
      this.goToTrainList();
    });
  }

  goToTrainList() {
    this.router.navigate(['/get-train']);
  }

  onSubmit() {
    this.saveTrain();
  }
}
  
