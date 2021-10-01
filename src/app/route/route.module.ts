import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule,Routes} from "@angular/router";

import {AppComponent} from "../app.component";
import {MenuPostulantComponent} from "../components/Postulant/Menu-postulant/menu-postulant/menu-postulant.component";
import {ProfilePostulantComponent} from "../components/Postulant/profile-postulant/profile-postulant.component";
import {MenuPetitionerComponent} from "../components/Petitioner/menu-petitioner/menu-petitioner.component";
import {ProfilePetitionerComponent} from "../components/Petitioner/profile-petitioner/profile-petitioner.component";
import {ViewAnnouncementComponent} from "../components/Petitioner/view-announcement/view-announcement/view-announcement.component";

const routes: Routes=[
  //{path: 'MenuPostulant', component: MenuPostulantComponent},
  {path:'MenuPostulant',
    component: MenuPostulantComponent, children:[{
    path:'ProfilePostulant',component:ProfilePostulantComponent
    }
    ]
  },
  {
    path:'MenuPetitioner',component:MenuPetitionerComponent,children:[{
      path: 'ProfilePetitioner',component: ProfilePetitionerComponent
    },{path:'ViewMyAnnouncements',component:ViewAnnouncementComponent }
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
