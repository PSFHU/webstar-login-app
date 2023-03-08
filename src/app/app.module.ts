import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { UserBarComponent } from './user-bar/user-bar.component';
import { AuthInterceptor } from './auth.interceptor';
import { CharacterBattleComponent } from './character-battle/character-battle.component';
import { BattleMetaComponent } from './battle-meta/battle-meta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharacterDetailsComponent,
    UserBarComponent,
    CharacterBattleComponent,
    BattleMetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
