/**
 * Angular 2 decorators and services
 */
import {
    Component,
    OnInit,
    ViewEncapsulation,
    ViewChild
} from '@angular/core';

import {MdSidenav} from '@angular/material';
import {Router} from '@angular/router';
import {Category, CategoryService} from "./course/category.service";


const SMALL_WIDTH_BREAKPOINT = 840;

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public angularclassLogo = 'assets/img/angularclass-avatar.png';
    public name = 'Landi Manager School';
    public categories: Category[];

    constructor(private _router: Router,
                private categoryService: CategoryService) {
    }

    @ViewChild(MdSidenav) sidenav: MdSidenav;

    public ngOnInit() {
        this._router.events.subscribe(() => {
            if (this.isScreenSmall()) {
                this.sidenav.close();
            }
        });

        this.categories = this.categoryService.all()
    }

    public onSelect(categoryName) {
        this._router.navigate(['/list', categoryName]);

        this.sidenav.close();
    }

    isScreenSmall(): boolean {
        return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
    }

    public home(){
        this._router.navigate(['']);
    }
}