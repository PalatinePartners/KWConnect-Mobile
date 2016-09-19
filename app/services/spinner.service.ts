import {Injectable} from '@angular/core';
import {Loading, LoadingController} from 'ionic-angular';

@Injectable()
export class Spinner {

    private loading: Loading;

    constructor(private loadingCtrl: LoadingController) {}

    public show() {
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true
        });
        this.loading.present();
    }

    public hide() {
        if (this.loading.isLoaded()) {
            this.loading.dismiss();
        }
    }
}
