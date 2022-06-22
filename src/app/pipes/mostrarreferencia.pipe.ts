import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarreferencia'
})
export class MostrarreferenciaPipe implements PipeTransform {

  transform(value: number): string {

    let result: string;
    result = "Ref-" + value
    return result;
  }

}
