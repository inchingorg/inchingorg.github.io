/**
 * Angular bootstrapping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';
/**
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

import {enableProdMode} from '@angular/core';

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */

enableProdMode();
bootloader(main);
