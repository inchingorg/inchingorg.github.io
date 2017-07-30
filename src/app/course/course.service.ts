import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
export interface Course {
    id: number,
    courseId: string,
    mediaType: string,
    catetory: string,
    title: string,
    url: string,
    poster: string,
    customizeAttr: string

}

@Injectable()
export class CourseService {
    private categoryUrl = '/categories';

    constructor(private http: Http) {
    }
}