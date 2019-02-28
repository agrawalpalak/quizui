import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { ResultComponent } from './result/result.component';
import { AdminUserPageComponent } from './admin-user-page/admin-user-page.component';
import { RegisterComponent } from './register/register.component';
import { QuizPaperComponent,FormatTimePipe } from './quiz-paper/quiz-paper.component';
import { AdminStartPageComponent } from './admin-start-page/admin-start-page.component';
import { AdminTestPageComponent } from './admin-test-page/admin-test-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
// import { HttpModule } from '@angular/http';
    import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes }   from '@angular/router';
import { StorageServiceModule} from 'angular-webstorage-service';
const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'RegisterComponent', component: RegisterComponent },
  { path: 'InstructionPageComponent', component: InstructionPageComponent },
  { path: 'ResultComponent', component: ResultComponent },
  { path: 'AdminUserPageComponent', component: AdminUserPageComponent },
  { path: 'QuizPaperComponent', component: QuizPaperComponent },
  { path: 'AdminStartPageComponent', component: AdminStartPageComponent },
  { path: 'AddQuestionComponent', component: AddQuestionComponent },
  { path: 'DeleteQuestionComponent', component: DeleteQuestionComponent },
  { path: 'AdminTestPageComponent', component: AdminTestPageComponent }

  
];
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    InstructionPageComponent,
    ResultComponent,
    AdminUserPageComponent,
    RegisterComponent,
    QuizPaperComponent,
    AdminStartPageComponent,
    AdminTestPageComponent,
    AddQuestionComponent,
    DeleteQuestionComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
