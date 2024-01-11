
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendedorMod } from '../models/vendedorMod.model';
import { Respon } from '../models/respon.model';
@Injectable({
  providedIn: 'root'

})
export class VendedoresService {

  constructor(
    private http:HttpClient
  ) { }
  getAll(){
    return this.http.get<VendedorMod[]>("http://localhost:8080/api/vendedores/todos").toPromise()
  } 
  addNew(newVendedor: VendedorMod):Observable<Respon>{
    return this.http.post<Respon>("http://localhost:8080/api/vendedores", newVendedor )
  }
  delete(id:any){
    return this.http.delete("http://localhost:8080/api/vendedores/"+ id )
  }
  update(vendedor:VendedorMod){
    return this.http.put("http://localhost:8080/api/vendedores/"+ vendedor.id, vendedor)
  }

  }

