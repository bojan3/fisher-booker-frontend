import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { CottageService } from 'src/app/services/cottage.service';
import { ShipService } from 'src/app/services/ship.service';
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

  constructor(private cottageService: CottageService, private shipService: ShipService,
    private accountService: AccountService) { }

  ngOnInit(): void {
  }

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {

    switch (this.accountService.currentUser.role) {
      case 'ROLE_COTTAGE_OWNER': {
        this.cottageService.uploadImage(this.uploadedImage, 1).subscribe((res) => {
          console.log(res);
          window.location.reload()
        })
        break;
      }

      case 'ROLE_SHIP_OWNER': {
        this.shipService.uploadImage(this.uploadedImage, 1).subscribe((res) => {
          console.log(res);
          window.location.reload()
        })
        break;
      }

    }

  }

}
