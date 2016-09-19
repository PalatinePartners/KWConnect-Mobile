import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Page, Platform, NavController} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/outside/outside.html',
})

export class OutsidePage implements OnInit {

    constructor(
        private nav: NavController
    ) {}

    ngOnInit() {
    }
}
