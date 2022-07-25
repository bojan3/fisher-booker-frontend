import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Image } from '../../entity/Image';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  @Input()
  images!: Image[];
  form!: UntypedFormGroup;
  imagesForm!: UntypedFormArray;
  
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /*this.form = this.formBuilder.group({
      images: this.formBuilder.array( this.createImages() )
    });*/
  }

  // createImages(){
  //   let formatted: FormGroup[] = [];
  //   this.images.forEach((image) => {
  //     formatted.push(this.createImage(image.id, image.file));
  //   })
  //   return formatted;
  // }

  // createImage(defaultId: number, defaultFile: File): FormGroup {
  //   return this.formBuilder.group({
  //     id: [defaultId],
  //     file: [defaultFile, Validators.compose([Validators.required])],
  //   });
  // }

  // addImage(): void {
  //   this.imagesForm = this.form.get('images') as FormArray;
  //   this.imagesForm.push(this.createImage(0, new File([], '')));
  //   this.images.push(new Image(0, new File([], '')));
  // }

  // removeImage(i: number): void{
  //   this.imagesForm = this.form.get('images') as FormArray;
  //   this.imagesForm.removeAt(i);
  //   this.images = this.images.filter((nav, index) => index != i)
  // }

  /*onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
    }
  }*/
}
