import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from './train';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  private addTrain = 'http://localhost:8080/api/createTrain';
  private getTrains = 'http://localhost:8080/api/getAllTrains';
  private getTrainById = 'http://localhost:8080/api/getTrainById';
  private editTrain = 'http://localhost:8080/api/updateTrain';
  private delTrain = 'http://localhost:8080/api/deleteTrain';

  constructor(private httpClient: HttpClient) {}

  createTrain(train: Train): Observable<Object> {
    return this.httpClient.post(`${this.addTrain}`, train);
  }

  getAllTrainList(): Observable<Train[]> {
    return this.httpClient.get<Train[]>(`${this.getTrains}`);
  }

  getTrainsById(id: number): Observable<Train> {
    return this.httpClient.get<Train>(`${this.getTrainById}/${id}`);
  }

  updateTrain(id: number, train: Train): Observable<Object> {
    return this.httpClient.put(`${this.editTrain}/${id}`, train);
  }
  deleteTrain(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delTrain}/${id}`);
  }
}
