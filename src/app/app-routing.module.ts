import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CharacterBattleComponent } from './character-battle/character-battle.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'character-details',
    component: CharacterDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'battle',
    component: CharacterBattleComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
