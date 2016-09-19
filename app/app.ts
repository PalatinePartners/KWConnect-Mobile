/// <reference path="../typings/globals/lodash/index.d.ts" />

import {Component, enableProdMode} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {CalendarPage} from './pages/calendar/calendar';
import {CoursePage} from './pages/course/course';
import {FeaturedPage} from './pages/featured/featured';
import {MaterialPage} from './pages/material/material';
import {OutsidePage} from './pages/outside/outside';
import {ProfilePage} from './pages/profile/profile';
import {SearchPage} from './pages/search/search';
import {FeaturedSinglePage} from './pages/featured/single';
import {CourseSinglePage} from './pages/course/single';
import {UploadPage} from './pages/upload/upload';
import {VideoPage} from './pages/video/video';
import {Spinner} from './services/spinner.service';

@Component({
    templateUrl: 'build/app.html',
    providers: [FormsModule, Spinner]
})
export class MyApp {
    private rootPage: any = VideoPage;
    constructor(private platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

enableProdMode();
ionicBootstrap(MyApp);
