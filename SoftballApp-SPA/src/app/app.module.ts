// External Imports
import {
   BrowserModule,
   HammerGestureConfig,
   HAMMER_GESTURE_CONFIG
 } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';

// Local Imports
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { PlayerCardComponent } from './players/player-card/player-card.component';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { appRoutes } from './routes';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { PlayerDetailResolver } from './_resolvers/player-detail.resolver';
import { PlayerListResolver } from './_resolvers/player-list.resolver';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';
import { PlayerEditResolver } from './_resolvers/player-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export function tokenGetter() {
   return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
   overrides = {
     pinch: { enable: false },
     rotate: { enable: false }
   };
 }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      PlayerListComponent,
      ListsComponent,
      MessagesComponent,
      PlayerCardComponent,
      PlayerDetailComponent,
      PlayerEditComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      PreventUnsavedChanges,
      UserService,
      PlayerDetailResolver,
      PlayerEditResolver,
      PlayerListResolver,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
