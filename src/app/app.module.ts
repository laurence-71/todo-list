import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { AppRoutingModule } from './app-routing.module';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations:
    [AppComponent,
      

    ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    TodosModule,
    RouterModule,
   
    AppRoutingModule,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
