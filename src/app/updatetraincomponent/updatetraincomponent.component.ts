import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-updatetraincomponent',
  templateUrl: './updatetraincomponent.component.html',
  styleUrl: './updatetraincomponent.component.css',
})
export class UpdatetraincomponentComponent implements OnInit {
  train: Train = new Train();
  id!: number;

  constructor(
    private trainService: TrainService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.trainService.getTrainsById(this.id).subscribe(
      (data) => {
        this.train = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.trainService.updateTrain(this.id, this.train).subscribe(
      (data) => {
        console.log(data);
        this.goTotrainList();
      },
      (error) => console.log(error)
    );
  }

  goTotrainList() {
    this.router.navigate(['/get-train']);
  }
}
