import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CottageOption } from 'src/app/entity/CottageOption';

@Component({
  selector: 'app-edit-cottage-options',
  templateUrl: './edit-cottage-options.component.html',
  styleUrls: ['./edit-cottage-options.component.css']
})
export class EditCottageOptionsComponent implements OnInit {

  @Input()
  options!: CottageOption[];

  form!: FormGroup;
  optionsForm!: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      options: this.formBuilder.array( this.createOptions() )
    });
  }

  createOptions(){
    let formatted: FormGroup[] = [];
    this.options.forEach((option) => {
      formatted.push(this.createOption(option.id, option.name, option.description, option.price));
    })
    return formatted;
  }

  createOption(defaultId: number, defaultName: string, defaultDescription: string, defaultPrice: number): FormGroup {
    return this.formBuilder.group({
      id: [defaultId],
      name: [defaultName, Validators.compose([Validators.required, Validators.maxLength(20)])],
      description: [defaultDescription, Validators.compose([Validators.required, Validators.maxLength(350)])],
      price: [defaultPrice]
    });
  }

  addOption(): void {
    this.optionsForm = this.form.get('options') as FormArray;
    this.optionsForm.push(this.createOption(0, '', '', 0));
    this.options.push(new CottageOption(0, '', '', 0));
  }

  removeOption(i: number): void{
    this.optionsForm = this.form.get('options') as FormArray;
    this.optionsForm.removeAt(i);
    this.options = this.options.filter((option, index) => index != i)
  }

}
