import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rule } from 'src/app/entity/Rule';

@Component({
  selector: 'app-edit-rules',
  templateUrl: './edit-rules.component.html',
  styleUrls: ['./edit-rules.component.css']
})
export class EditRulesComponent implements OnInit {

  @Input()
  rules!: Rule[];

  form!: FormGroup;
  rulesForm!: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rules: this.formBuilder.array( this.createRules() )
    });
  }

  createRules(){
    let formatted:FormGroup[] = [];
    this.rules.forEach((rule) => {
      formatted.push(this.createRule(rule.id, rule.description));
    })
    return formatted;
  }

  createRule(defaultId: number, defaultDescription: string): FormGroup {
    return this.formBuilder.group({
      id: [defaultId],
      description: [defaultDescription, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(350)])],
    });
  }

  addRule(): void {
    this.rulesForm = this.form.get('rules') as FormArray;
    this.rulesForm.push(this.createRule(0, ''));
    this.rules.push(new Rule(0, ''));
  }

  removeRule(i: number): void{
    this.rulesForm = this.form.get('rules') as FormArray;
    this.rulesForm.removeAt(i);
    this.rules = this.rules.filter((room, index) => index != i)
  }

}
