import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

// Kendo Ui Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartModule } from '@progress/kendo-angular-charts';

// Third Party Modules
import { DndModule } from 'ng2-dnd'
import { MomentModule } from 'angular2-moment';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyContentsComponent } from './body-contents/body-contents.component';
import { PeoplesComponent } from './body-contents/peoples/peoples.component';
import { AddTaskComponent } from './body-contents/add-task/add-task.component';
import { BoardComponent } from './body-contents/board/board.component';
import { ReportsComponent } from './reports/reports.component';
import { TopContributionComponent } from './reports/top-contribution/top-contribution.component';
import { MainbodyContentsComponent } from './reports/mainbody-contents/mainbody-contents.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockData } from './shared/services/in-memory-data.service';

// Services
import { EmitterService } from './shared/services/emitter.service';
import { PeoplesService } from './shared/services/peoples.service';
import { TaskService } from './shared/services/task.service';
import { SkillsService } from './shared/services/skills.service';
import { TaskContributionService } from './shared/services/task-contribution.service';



const appRoutes: Routes = [
  { path: '', component: BodyContentsComponent },
  {
    path: 'reports',
    component: ReportsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyContentsComponent,
    PeoplesComponent,
    AddTaskComponent,
    BoardComponent,
    ReportsComponent,
    TopContributionComponent,
    MainbodyContentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ButtonsModule,
    DialogModule,
    InputsModule,
    DropDownsModule,
    DateInputsModule,
    InMemoryWebApiModule.forRoot(MockData),
    DndModule.forRoot(),
    ChartModule,
    MomentModule
  ],
  providers: [
    PeoplesService,
    TaskService,
    SkillsService,
    EmitterService,
    TaskContributionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
