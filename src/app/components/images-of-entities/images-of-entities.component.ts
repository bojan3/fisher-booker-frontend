import { Component, Input, OnInit } from '@angular/core';
import { Image } from "../../entity/Image";

@Component({
  selector: 'app-images-of-entities',
  templateUrl: './images-of-entities.component.html',
  styleUrls: ['./images-of-entities.component.css']
})
export class ImagesOfEntitiesComponent implements OnInit {

  @Input()
  images: Image[] | undefined = [];

  constructor() { }

  ngOnInit(): void {
  }

  fullSize(event: any){
    let id = event.target.id;
    console.log(id);
    
    document.querySelector('#'+id)?.parentElement?.classList.toggle('full-size');
  }

  onFileChanged(event: any){
    console.log(event.target.files[0]);
    
  }

}
