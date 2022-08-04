import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { FishingEquipment } from 'src/app/entity/FishingEquipment';

@Component({
  selector: 'app-edit-fishing-equipment',
  templateUrl: './edit-fishing-equipment.component.html',
  styleUrls: ['./edit-fishing-equipment.component.css']
})
export class EditFishingEquipmentComponent implements OnInit {

  @Input()
  fishs!: FishingEquipment[];
  form!: UntypedFormGroup;
  fishsForm!: UntypedFormArray;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fishs: this.formBuilder.array(this.createFishs())
    });
  }

  createFishs() {
    let formatted: UntypedFormGroup[] = [];
    this.fishs.forEach((fish) => {
      formatted.push(this.createFish(fish.id, fish.name));
    })
    return formatted;
  }

  createFish(defaultId: number, defaultName: string): UntypedFormGroup {
    return this.formBuilder.group({
      id: [defaultId],
      name: [defaultName, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
    });
  }

  addFish(): void {
    this.fishsForm = this.form.get('fishs') as UntypedFormArray;
    this.fishsForm.push(this.createFish(0, ''));
    this.fishs.push(new FishingEquipment(0, ''));
  }

  removeFish(i: number): void {
    this.fishsForm = this.form.get('fishs') as UntypedFormArray;
    this.fishsForm.removeAt(i);
    this.fishs = this.fishs.filter((fish, index) => index != i)
  }

}
