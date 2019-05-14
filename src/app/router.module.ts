import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, childRoutes } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { SformComponent } from './sform/sform.component';
import { LoggedInGuard } from 'src/logged-in.guard';

const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginFormComponent },
    { path: 'home', component: HomeComponent, children: childRoutes, canActivate: [LoggedInGuard] },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginFormComponent,
        HomeComponent,
        AboutComponent,
        StudentComponent,
        SformComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [LoggedInGuard],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule { }
