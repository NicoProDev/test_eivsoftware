import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormagregarComponent } from './pages/formagregar/formagregar.component';
import { FormeditarComponent } from './pages/formeditar/formeditar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"agregar", component: FormagregarComponent},
  {path:"editar/:id", component: FormeditarComponent},
  {path:"404", component: NotFoundComponent},
  {path:"**", redirectTo:"/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
