import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddShipDTO } from '../entity/DTO/AddShipDTO';
import { ShipDTO } from '../entity/DTO/ShipDTO';
import { Ship } from '../entity/Ship';
import { ApiService } from './api.service';
import { Option } from 'src/app/entity/Option';
import { AddSuperDealDTO } from '../entity/DTO/AddSupeDealDTO';
import { EditShipDTO } from '../entity/DTO/EditShipDTO';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  save(ship: AddShipDTO): Observable<boolean>{
    console.log(ship);
    return this.apiService.post('http://localhost:8081/api/ship/save', ship);
  }

  update(ship: EditShipDTO): Observable<boolean> {
    console.log(ship);
    return this.apiService.put('http://localhost:8081/api/ship/update', ship);   
  }

  getById(id: string): Observable<Ship> {
    return this.apiService.get('http://localhost:8081/api/ship/page/' + id);
  }

  getAllShips(type ?: string, order?: string): Observable<ShipDTO[]>{
    if(type && order)
      return this.apiService.get('http://localhost:8081/api/ship/all/', {type: type, order: order});
    return this.apiService.get('http://localhost:8081/api/ship/all');
  }

  deleteShip(id: number): Observable<ShipDTO[]> {
    return this.http.delete<ShipDTO[]>('http://localhost:8081/api/ship/delete/owner/' + id)
  }
  
  adeleteShip(id: number): Observable<ShipDTO[]> {
    return this.http.delete<ShipDTO[]>('http://localhost:8081/api/ship/admin/delete/' + id)
  }

  getAllShipsByOwner(): Observable<ShipDTO[]> {
    return this.http.get<ShipDTO[]>('http://localhost:8081/api/shipOwner/allShipsByOwner');
  }

  checkShipOwnersip(id: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8081/api/ship/ownership/' + id);
  }

  createSuperDeal(deal: AddSuperDealDTO): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8081/api/superDeal/add/', deal);
  }

  getOptions(id: number): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/api/ship/options/' + id);
  }

  getLocaitons(): Observable<string[]> {
    return this.apiService.get('http://localhost:8081/api/ship/locations');
  }

  search(searchFilter: any): Observable<ShipDTO[]> {   
    return this.apiService.get('http://localhost:8081/api/ship/search/filter/' + this.toParam(searchFilter));
  }

  toParam(obj: any): string{
    return '?' + Object.keys(obj).map(key => {
      return `${key}=${encodeURIComponent(obj[key])}`;
    })
    .join('&');
  }

  uploadImage(image: File, id: number): Observable<boolean> {
    const imageFormData = new FormData();
    imageFormData.append('image', image, image.name);
    return this.http.post<boolean>('http://localhost:8081/api/ship/upload/' + id, imageFormData)
  }

  deleteImage(id: number): Observable<boolean> {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.http.delete<boolean>('http://localhost:8081/api/ship/delete/image/' + id)
  }
}
