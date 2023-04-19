import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ListOfClientsComponent} from "./list-of-clients/list-of-clients.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'listofclients', component: ListOfClientsComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
