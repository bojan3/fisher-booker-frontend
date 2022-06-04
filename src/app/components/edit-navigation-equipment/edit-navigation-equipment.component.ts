import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { NavigationEquipment } from 'src/app/entity/NavigationEquipment';

@Component({
  selector: 'app-edit-navigation-equipment',
  templateUrl: './edit-navigation-equipment.component.html',
  styleUrls: ['./edit-navigation-equipment.component.css']
})
export class EditNavigationEquipmentComponent implements OnInit {

  @Input()
  navs!: NavigationEquipment[];
  form!: FormGroup;
  navsForm!: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      navs: this.formBuilder.array( this.createNavs() )
    });
  }

  createNavs(){
    let formatted: FormGroup[] = [];
    this.navs.forEach((nav) => {
      formatted.push(this.createNav(nav.id, nav.name));
    })
    return formatted;
  }

  createNav(defaultId: number, defaultName: string): FormGroup {
    return this.formBuilder.group({
      id: [defaultId],
      name: [defaultName, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
    });
  }

  addNav(): void {
    this.navsForm = this.form.get('navs') as FormArray;
    this.navsForm.push(this.createNav(0, ''));
    this.navs.push(new NavigationEquipment(0, ''));
  }

  removeNav(i: number): void{
    this.navsForm = this.form.get('navs') as FormArray;
    this.navsForm.removeAt(i);
    this.navs = this.navs.filter((nav, index) => index != i)
  }
}

