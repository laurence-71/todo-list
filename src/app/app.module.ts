import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodolistComponent } from './todos/todolist/todolist.component';
import { TodosModule } from './todos/todos.module';


@NgModule({
  declarations: 
  [AppComponent,
     MeteoComponent,
  
   
    ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
  TodosModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
