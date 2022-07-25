import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Option } from '../../entity/Option'

@Component({
  selector: 'app-edit-options',
  templateUrl: './edit-options.component.html',
  styleUrls: ['./edit-options.component.css']
})
export class EditOptionsComponent implements OnInit {

  @Input()
  options!: Option[];

  form!: UntypedFormGroup;
  optionsForm!: UntypedFormArray;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      options: this.formBuilder.array( this.createOptions() )
    });
  }

  createOptions(){
    let formatted: UntypedFormGroup[] = [];
    this.options.forEach((option) => {
      formatted.push(this.createOption(option.id, option.name, option.description, option.price));
    })
    return formatted;
  }

  createOption(defaultId: number, defaultName: string, defaultDescription: string, defaultPrice: number): UntypedFormGroup {
    return this.formBuilder.group({
      id: [defaultId],
      name: [defaultName, Validators.compose([Validators.required, Validators.maxLength(20)])],
      description: [defaultDescription, Validators.compose([Validators.required, Validators.maxLength(350)])],
      price: [defaultPrice]
    });
  }

  addOption(): void {
    this.optionsForm = this.form.get('options') as UntypedFormArray;
    this.optionsForm.push(this.createOption(0, '', '', 0));
    this.options.push(new Option(0, '', '', 0));
  }

  removeOption(i: number): void{
    this.optionsForm = this.form.get('options') as UntypedFormArray;
    this.optionsForm.removeAt(i);
    this.options = this.options.filter((option, index) => index != i)
  }

}
