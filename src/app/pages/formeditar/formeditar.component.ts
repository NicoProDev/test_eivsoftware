import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LocalidadesService } from '../../services/localidades.service';
import { VendedoresService } from '../../services/vendedores.service';
import { ActivatedRoute } from '@angular/router';
import { VendedorMod } from '../../models/vendedorMod.model';

@Component({
  selector: 'app-formeditar',
  templateUrl: './formeditar.component.html',
  styleUrls: ['./formeditar.component.css']
})
export class FormeditarComponent implements OnInit {
  editForm:FormGroup
  editando!:VendedorMod
  vendedores:VendedorMod[]=[]
  localidades:any
  habilitacion = [{
    id:0,
    value: 'Si',
    bool: true
  },
  {
    id:1,
    value: 'No',
    bool: false
  }]
  constructor(
    private editfb:FormBuilder,
    private localidadesService:LocalidadesService,
    private vendedoresService:VendedoresService,
    private activatedRoute: ActivatedRoute,
    
  
    ) 
    {
      
      this.localidadesService.getAll()
      .subscribe(data=>{
        this.localidades=data; 
      },(error) => {
        console.log(error.error)
      })
    this.editForm = this.editfb.group({
      usuarioLogin:["", Validators.required],
      nombre:["", Validators.required],
      habilitado:["", Validators.required],
      fechaNacimiento:["", Validators.required],
      observaciones:[""],
      localidad:["", Validators.required],
    })
   }

  modificarVendedor(){
    this.vendedoresService.update(this.editForm.value)
    .subscribe(resp => {console.log(resp)}), (error:any) => {
      console.log(error.error)
    }
  }
  async getVendedor(id:number){
    try{
      this.vendedores = await this.vendedoresService.getAll()
      this.editando = this.vendedores[id]
      console.log(this.editando)
    } catch(e){
      console.log(e)
    }
   }

  ngOnInit() {
    const idEdit:any  = this.activatedRoute.snapshot.paramMap.get("id")
      const indexEdit = (parseInt(idEdit) - 1)
    this.getVendedor(indexEdit)
  }     

}
