import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform{
    transform(value: boolean, ): 'Sí vuela' | 'No vuela' {
        return value? 'Sí vuela' : 'No vuela';
        
    }

}