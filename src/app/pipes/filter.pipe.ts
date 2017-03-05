import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchFor: string): any {
    if(!searchFor) return value;

    return value.filter(video => {
      return video.title.indexOf(searchFor) >= 0;
    });
  }

}
