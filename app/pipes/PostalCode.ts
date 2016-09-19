import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'postalCode'
})
export class PostalCode implements PipeTransform {
    transform(value: string, args: string[]): string {
        if (!value) {
            return value;
        }
        let str = value.replace(/\D/g, '').substring(0, 5);
        return str;
    }
}
