import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirLibroComponent } from './pages/anadir-libro/anadir-libro.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { ModificarLibroComponent } from './pages/modificar-libro/modificar-libro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'registro', component: RegistroComponent},
  {path:'', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'modificar-libro', component: ModificarLibroComponent},
  {path: 'anadir-libro', component: AnadirLibroComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
