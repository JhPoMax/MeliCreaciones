import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Nosotros } from './nosotros/nosotros';
import { Productos } from './productos/productos';
import { Contacto } from './contacto/contacto';


export const routes: Routes = [{
    path: 'inicio',
    component: Inicio
},

{
    path: 'nosotros',
    component: Nosotros
},


{
    path: 'productos',
    component: Productos
},

{
    path: 'contacto',
    component: Contacto
},

{
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
},

 {
    path: '**',
    redirectTo: 'inicio'
  }
];
