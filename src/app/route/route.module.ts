import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule,Routes} from "@angular/router";

import {AppComponent} from "../app.component";
import {MenuPostulantComponent} from "../components/Postulant/Menu-postulant/menu-postulant/menu-postulant.component";
import {ProfilePostulantComponent} from "../components/Postulant/profile-postulant/profile-postulant.component";


const routes: Routes=[
  //{path: 'MenuPostulant', component: MenuPostulantComponent},
  {path:'MenuPostulant',
    component: MenuPostulantComponent, children:[{
    path:'ProfilePostulant',component:ProfilePostulantComponent
    }
    ]
  },

  {path: 'Profile2', component: ProfilePostulantComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
