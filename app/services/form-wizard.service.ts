import * as _ from 'lodash';
import {Injectable} from '@angular/core';

@Injectable()
export class FormWizard {
    public data: any = {};
    public step: number = 0;
    nextStep(data = null) {
        if (data) {
            this.data = _.merge(data, this.data);
            if (data.yearsOfService > 12) {
                this.step++;
            }
        }
        this.step++;
    }
    prevStep() {
        this.step--;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
