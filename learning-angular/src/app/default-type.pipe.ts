import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
