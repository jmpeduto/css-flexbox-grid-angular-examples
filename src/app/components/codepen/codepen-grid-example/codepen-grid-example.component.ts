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

  changeFlex(input: any, targetClass: any, itemIdSelector: any) {
    document
      .querySelector('#' + itemIdSelector)
      ?.setAttribute('class', targetClass + ' ' + input.value);
  }

  changeItemFlex(input: any, targetClass: any, itemIdSelector: any) {
    console.log('class', targetClass + ' ' + input.value);
    document
    .querySelector('#' + itemIdSelector)
    ?.setAttribute('class', targetClass + ' ' + input.value);
  }
}
