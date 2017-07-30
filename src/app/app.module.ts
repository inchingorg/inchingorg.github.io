import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {
    NgModule,
    ApplicationRef
} from '@angular/core';

import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer
} from '@angularclass/hmr';

import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

import {
    FullscreenOverlayContainer,
    MaterialModule,
    MdNativeDateModule,
    MdSelectionModule,
    OverlayContainer
} from '@angular/material';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {HomeComponent} from './home';
import {CourseDetailComponent} from './course/course.detail.component';

import {NoContentComponent} from './no-content';
import {ComponentPageHeader} from './component-page-header/component-page-header';
import {Footer} from './footer/footer';
import {ComponentPageTitle} from './page-title/page-title'


import '../styles/styles.scss';
import '../styles/headings.css';
import {CategoryService} from "./course/category.service";
import {CourseListComponent} from "./course/course.list.component";

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS
];

type StoreType = {
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        CourseDetailComponent,
        CourseListComponent,
        NoContentComponent,
        ComponentPageHeader,
        Footer
    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
        MaterialModule,
        MdNativeDateModule,
        MdSelectionModule
    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS,
        CategoryService,
        ComponentPageTitle
    ]
})
export class AppModule {

    constructor(public appRef: ApplicationRef) {
    }
}
