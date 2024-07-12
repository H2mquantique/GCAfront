import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ActivateAccountComponent } from './auth/activate-account/activate-account.component';
import { ClientDossierComponent } from './client-dossier/client-dossier.component';
import { ClientAffairesComponent } from './client-affaires/client-affaires.component';
import { AdminAvailabilityComponent } from './admin-availability/admin-availability.component';
import { WeeklyAvailabilitiesComponent } from './weekly-availabilities/weekly-availabilities.component';
import { ChooseServiceComponent } from './choose-service/choose-service.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { AdminRdvComponent } from './admin-rdv/admin-rdv.component';
import { ClientGuard } from './auth/client.guard';
import { DossierComponent } from './dossier/dossier.component';
import { AffaireComponent } from './affaire/affaire.component';
import { ListDossierComponent } from './list-dossier/list-dossier.component';
import { AffaireAudiencesComponent } from './affaire-audiences/affaire-audiences.component';
import { AudiencesByDayComponent } from './audiences-by-day/audiences-by-day.component';
import { ClientListComponent } from './client-list/client-list.component';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'activate-account', component: ActivateAccountComponent },
  { path: 'client-dossier/:id', component: ClientDossierComponent },
  { path: 'clients/:id/affaires', component: ClientAffairesComponent },
  { path: 'admin-availability', component: AdminAvailabilityComponent },
  { path: 'weekly-availabilities', component: WeeklyAvailabilitiesComponent },
  { path: 'admin-notifications', component: AdminNotificationsComponent },
  { path: 'choose-service', component: ChooseServiceComponent, canActivate: [ClientGuard] },
  { path: 'admin/rdvs', component: AdminRdvComponent },
  { path: 'dossiers', component: DossierComponent },
  { path: 'list-dossier', component: ListDossierComponent },
  { path: 'client-list', component: ClientListComponent },




  { path: 'dossier/:id/affaires', component: AffaireComponent },
  { path: 'audiences/byAffaire/:affaireId', component: AffaireAudiencesComponent },
  { path: 'audiences-by-day/:date', component: AudiencesByDayComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
