import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CottageService } from 'src/app/services/cottage.service';
import { Image } from '../../entity/Image';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;

  constructor(private cottageService: CottageService) { }

  ngOnInit(): void {
  }

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }


  imageUploadAction() {

    this.cottageService.uploadImage(this.uploadedImage, 1).subscribe((res) => {
      console.log(res);
    })

    // this.httpClient.post('http://localhost:8080/upload/image/', imageFormData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.postResponse = response;
    //       this.successResponse = this.postResponse.body.message;
    //     } else {
    //       this.successResponse = 'Image not uploaded due to some error!';
    //     }
    //   }
    //   );
  }

}
