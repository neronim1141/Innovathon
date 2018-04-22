// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { AgmCoreModule } from '@agm/core';
import { environment } from './environments/environment';
import { MaterialModule } from './app/shared/modules/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';

declare const require: any;

@NgModule({
  imports: [
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  exports: [MaterialModule, AgmCoreModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
class TestModule {}

getTestBed().initTestEnvironment(
  [BrowserDynamicTestingModule, TestModule],
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
