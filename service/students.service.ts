import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../model/students';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url = "http://localhost:8000/students"

  constructor(private http:HttpClient) { }

  saveData (regForm:any){
    return this.http.post(this.url, regForm) 
  }

  getStudentData (){
    return this.http.get<Students[]>(this.url);
  }

  updateData (updateForm:any){
    return this.http.put(this.url+"/"+updateForm.id,updateForm);
  }

  deleteData (id:number){
    return this.http.delete(this.url+"/"+id);
  }

}
