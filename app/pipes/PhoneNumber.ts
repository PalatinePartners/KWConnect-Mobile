import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhoneNumber implements PipeTransform {
    transform(value: string, args: string[]): string {
        if (!value) {
            return value;
        }
        let str = value.replace(/\D/g, '');
        switch (str.length) {
            case 0:
            case 1:
            case 2:
                str = '(' + str;
                break;
            case 3:
            case 4:
            case 5:
                str = '(' + str.substring(0, 3) + ') ' + str.substring(3, str.length);
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            default:
                str = '(' + str.substring(0, 3) + ') ' + str.substring(3, 6) + '-' + str.substring(6, str.length);
                break;
        }
        return str;
    }
}
