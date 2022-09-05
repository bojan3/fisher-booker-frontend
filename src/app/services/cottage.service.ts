import { Injectable } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CottageDTO } from '../entity/DTO/CottageDTO';
import { ApiService } from './api.service';
import { Cottage } from '../entity/Cottage';
import { AddCottageDTO } from '../entity/DTO/AddCottageDTO';
import { AddSuperDealDTO } from '../entity/DTO/AddSupeDealDTO';
import { Option } from 'src/app/entity/Option';
import { DatePeriodDTO } from '../entity/DTO/DatePeriodDTO';
import { AddReservationDTO } from '../entity/DTO/AddReservationDTO';
import { EditCottageDTO } from '../entity/DTO/EditCottageDTO';

@Injectable({
  providedIn: 'root'
})
export class CottageService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllCottages(type?: string, order?: string): Observable<CottageDTO[]> {
    if (type && order)
      return this.apiService.get('http://localhost:8081/api/cottage/all/', { type: type, order: order });
    return this.apiService.get('http://localhost:8081/api/cottage/all');
  }

  getById(id: string): Observable<Cottage> {
    return this.apiService.get('http://localhost:8081/api/cottage/page/' + id);
  }
  getAllCottagesByName(): Observable<Cottage[]> {
    // return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all/name');
    return this.apiService.get('http://localhost:8081/api/cottage/all/', { type: "name1", order: "desc1" });
  }

  getAllCottagesByPrice(): Observable<Cottage[]> {
    return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all/price');
  }

  getAllCottagesByOwner(): Observable<CottageDTO[]> {
    return this.http.get<CottageDTO[]>('http://localhost:8081/api/cottageOwner/allCottagesByOwner');
  }

  getAllCottagesByRating(): Observable<Cottage[]> {
    return this.http.get<Cottage[]>('http://localhost:8081/api/cottage/all/rate');
  }

  saveCottage(cottage: AddCottageDTO): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8081/api/cottage/save', cottage);
  }

  updateCottage(cottage: EditCottageDTO): Observable<boolean> {
    return this.http.put<boolean>('http://localhost:8081/api/cottage/update', cottage);
  }

  adeleteCottage(id: number): Observable<CottageDTO> {
    console.log("ADMIN");
    return this.apiService.delete('http://localhost:8081/api/cottage/admin/delete/' + id);
  }

  deleteCottage(id: number): Observable<CottageDTO> {
    return this.apiService.delete('http://localhost:8081/api/cottage/delete/owner/' + id);
  }

  // msm da je visak
  // getByDate(date: Date): Observable<CottageDTO[]> {

  //   console.log(date);
  //   return this.apiService.get('http://localhost:8081/api/cottage/all/date/' + date);
  // }

  // uploadImage(cottage: AddCottageDTO, image: File): Observable<boolean> {
  //   const uploadData = new FormData();
  //   console.log(image);

  //   uploadData.append('image', image, image.name);
  //   uploadData.append('cottage', JSON.stringify(cottage));
  //   return this.http.post<boolean>('http://localhost:8081/api/cottage/uploadImage', uploadData);
  // }

  checkCottageOwnersip(id: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8081/api/cottage/ownership/' + id);
  }

  createSuperDeal(deal: AddSuperDealDTO): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8081/api/superDeal/add/', deal);
  }

  getOptions(id: number): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:8081/api/cottage/options/' + id);
  }

  getCottageLocaitons(): Observable<string[]> {
    return this.apiService.get('http://localhost:8081/api/cottage/locations');
  }

  getDates(id: number): Observable<DatePeriodDTO[]> {
    return this.http.get<DatePeriodDTO[]>('http://localhost:8081/api/cottage/dates/' + id);
  }

  getReservationDetails(cottageId: number, date: Date) {
    return this.http.get<DatePeriodDTO[]>('http://localhost:8081/api/cottage/' + cottageId + '/' + date);
  }
 
  search(searchFilter: any): Observable<CottageDTO[]> {   
    return this.apiService.get('http://localhost:8081/api/cottage/search/filter/' + this.toParam(searchFilter));
  }

  toParam(obj: any): string{
    return '?' + Object.keys(obj).map(key => {
      return `${key}=${encodeURIComponent(obj[key])}`;
    })
    .join('&');
  }

  createReservation(reservation: AddReservationDTO): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8081/api/reservation/createByOwner', reservation);
  }

  uploadImage(image: File, id: number): Observable<boolean> {
    const imageFormData = new FormData();
    imageFormData.append('image', image, image.name);
    return this.http.post<boolean>('http://localhost:8081/api/cottage/upload/' + id, imageFormData)
  }

  deleteImage(id: number): Observable<boolean> {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.http.delete<boolean>('http://localhost:8081/api/cottage/delete/image/' + id)
  }

}
