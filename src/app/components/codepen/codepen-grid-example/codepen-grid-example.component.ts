import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codepen-grid-example',
  templateUrl: './codepen-grid-example.component.html',
  styleUrls: ['./codepen-grid-example.component.scss'],
})
export class CodepenGridExampleComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // this.changeFlex('flex-direction', 'direction');
  }

  changeFlex(input:any, inputClass: any, itemIdSelector: any) {
    document
      .querySelector('#' + itemIdSelector)
      ?.setAttribute('class', inputClass + ' ' + input.value);
  }
}
