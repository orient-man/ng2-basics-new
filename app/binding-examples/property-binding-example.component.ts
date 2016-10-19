import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'property-binding-example',
  templateUrl: 'app/binding-examples/property-binding-example.component.html'
})
export class PropertyBindingExampleComponent implements OnInit {

  batman:Object;
  isBtnDisabled:boolean;
  image:Object;

  ngOnInit(): void {
    this.batman = {name: "Batman!!!"};
    this.isBtnDisabled = true;
    this.image = {
      url: "http://media.dcentertainment.com/sites/default/files/GalleryChar_1920x1080_BM_Cv38_54b5d0d1ada864.04916624.jpg"
    };
  }

}
