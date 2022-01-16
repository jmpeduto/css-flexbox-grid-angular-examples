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

  changeFlex(input: any, containerClass: any, itemIdSelector: any) {
    document
      .querySelector('#' + itemIdSelector)
      ?.setAttribute('class', containerClass + ' ' + input.value);
  }

  changeItemFlex(input: any, containerClass: any, itemIdSelector: any) {
    console.log('class', containerClass + ' ' + input.value);
    document
      .querySelector('#' + itemIdSelector)
      ?.setAttribute('class', containerClass + ' ' + input.value);
  }

  changeFlexGrow(input: any, itemIdSelector: any) {
    let n = isNaN(input.value) ? 0 : input.value;
    console.log('Grow: ' + n);
    let element: any = document.querySelector('#' + itemIdSelector);
    element.style.WebkitFlexGrow = n;
    element.style.flexGrow = n;
  }

  changeFlexShrink(input: any, itemIdSelector: any) {
    let n = isNaN(input.value) ? 0 : input.value;
    console.log('Shrink: ' + n);
    let element: any = document.querySelector('#' + itemIdSelector);
    element.style.WebkitFlexShrink = n;
    element.style.flexShrink = n;
  }

  changeFlexBasis(input: any, itemIdSelector: any) {
    let n = isNaN(input.value) ? 0 : input.value;
    console.log('Basis: ' + n);
    let element: any = document.querySelector('#' + itemIdSelector);
    element.style.WebkitFlexBasis = n + 'px';
    element.style.flexBasis = n + 'px';
  }

  changeFlexOrder(input: any, itemIdSelector: any) {
    let n = isNaN(input.value) ? 0 : input.value;
    console.log('Order: ' + n);
    let element: any = document.querySelector('#' + itemIdSelector);
    element.style.WebkitOrder = n;
    element.style.order = n;
  }

  changeAll(input1Id:any, input2Id:any, input3Id:any, item:any) {
    console.log(input1Id + " " + input2Id + " " + input3Id + " " + item);
    let input1 = document.getElementById(input1Id);
    let input2 = document.getElementById(input2Id);
    let input3 = document.getElementById(input3Id);
    this.changeFlexBasis(input1, item);
    this.changeFlexGrow(input2, item);
    this.changeFlexShrink(input3, item);
  }
}
