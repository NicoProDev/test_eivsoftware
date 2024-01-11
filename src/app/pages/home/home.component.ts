import { Component, OnInit } from '@angular/core';
import { VendedoresService } from '../../services/vendedores.service';
import { VendedorMod } from '../../models/vendedorMod.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  vendedores:VendedorMod[]=[]
  mostrarEdicion:boolean = false
  constructor(
    
    private vendedoresService:VendedoresService
    
  ) {
    
  
   }
   async getVendedores(){
    this.vendedores = await this.vendedoresService.getAll()
    
  
   }
  editarVendedor(vendedor:any){
    this 
  }
  eliminarVendedor(pepe:any){
    console.log(pepe.id)
    this.vendedoresService.delete(pepe.id).subscribe(resp=>console.log(resp))
  }


  ngOnInit():void {
    this.getVendedores();
  }

}
