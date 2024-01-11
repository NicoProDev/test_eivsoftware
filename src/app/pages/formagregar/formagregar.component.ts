import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LocalidadesService } from '../../services/localidades.service';
import { VendedoresService } from '../../services/vendedores.service';
import { Localidades } from '../../models/localidades.model';
import { HttpErrorResponse } from '@angular/common/http';
import { VendedorMod } from '../../models/vendedorMod.model';




@Component({
  selector: 'app-formagregar',
  templateUrl: './formagregar.component.html',
  styleUrls: ['./formagregar.component.css']
})
export class FormagregarComponent implements OnInit {
  localidades:any;
  habilitacion = [{
    id:0,
    value: 'Si',
    bool: true
  },
  {
    id:1,
    value: 'No',
    bool: false
  }
  ];
  myForm:FormGroup;
  constructor(
    private formb:FormBuilder,
    private localidadesService:LocalidadesService,
    private vendedoresService:VendedoresService,
   
  ) { 
    this.localidadesService.getAll()
    .subscribe(data=>{
      this.localidades=data; 
    },(error:HttpErrorResponse) => {
      console.log(error.error)
    })
    
    this.myForm = this.formb.group({
      usuarioLogin:["", Validators.required],
      nombre:["", Validators.required],
      habilitado:["", Validators.required],
      fechaNacimiento:["", Validators.required],
      observaciones:[""],
      localidad:["", Validators.required],
    })

  }
  agregarVendedor() {
    this.vendedoresService.addNew(this.myForm.value)
    .subscribe(data=>{
      console.log(data)
      this.myForm.reset();
    },(error:HttpErrorResponse) => {
      console.log(error.error)
    })
  }

  ngOnInit(): void {
    
  }

}
