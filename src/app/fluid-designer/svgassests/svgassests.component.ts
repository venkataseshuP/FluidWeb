import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svgassests',
  templateUrl: './svgassests.component.html',
  styleUrls: ['./svgassests.component.css']
})
export class SvgassestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() category:any;
  @Input() image:any;
  @Input() width:any;
  @Input() height:any;
}
