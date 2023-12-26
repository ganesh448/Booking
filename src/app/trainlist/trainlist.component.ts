import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrl: './trainlist.component.css',
})
export class TrainlistComponent {
  trains: Train[] | undefined;

  constructor(private trainService: TrainService, private router: Router) {}
  ngOnInit(): void {
    this.getTrainList();
  }

  private getTrainList() {
    this.trainService.getAllTrainList().subscribe((data) => {
      this.trains = data;
    });
  }
  updateTrain(id: number) {
    this.router.navigate(['update-train', id]);
  }
  deleteTrain(id: number) {
    this.trainService.deleteTrain(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadComponent();
      },
      (error) => console.log(error)
    );
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/get-train']);
  }
}
