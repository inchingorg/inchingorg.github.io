import {
    Component,
    OnInit,
} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CategoryService} from "./category.service";
import {Course} from "./course.service";

@Component({
    selector: 'detail',
    styleUrls: ['./course.list.component.scss'],
    templateUrl: './course.list.component.html',
})
export class CourseListComponent implements OnInit {
    private courses: Course[];

    constructor(private activedRoute: ActivatedRoute,
                private categoryService: CategoryService,
                private route: Router) {
    }

    public ngOnInit() {
        console.log("Enter into CourseDetailComponent");
        this.activedRoute.params
            .switchMap((params: Params) => {
                return this.categoryService.getCourses(params['category']);
            })
            .subscribe(courses => this.courses = courses)
        ;
    }

    onSelect(course) {
        this.route.navigate(['/detail', course]);
    }
}
