import {Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {CourseListComponent} from "./course/course.list.component";
import {CourseDetailComponent} from './course/course.detail.component';

export const ROUTES: Routes = [
    {path: 'detail/:id', component: CourseDetailComponent},
    {path: 'detail', component: CourseDetailComponent},
    {path: 'list/:category', component: CourseListComponent},
    {path: '', component: HomeComponent},
];
