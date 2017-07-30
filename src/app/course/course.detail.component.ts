import {
    Component,
    OnInit,
} from '@angular/core';

import {ActivatedRoute, Params} from "@angular/router";
import {Course} from "./course.service";

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
    selector: 'detail',
    templateUrl: './course.detail.component.html',
    styleUrls: ['./course.detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
    public course: Course;

    constructor(private ativeRoute: ActivatedRoute) {
    }

    public ngOnInit() {
        console.log("Enter into CourseDetailComponent");
        this.ativeRoute.params
            .subscribe((course: Course) => {
                this.course = course
            });
    }

}
