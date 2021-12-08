import { Component, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormControlConfiguration } from '../../../models/FormControlConfiguration';

@Component({
  selector: 'dynamic-gender',
  templateUrl: './dynamic-gender.component.html',
})
export class DynamicGenderComponent implements OnInit {
  parentform!: FormGroup;
  @Input() formControlConfiguration!: FormControlConfiguration;

  constructor(private controlContainer: ControlContainer) {}
  ngOnInit(): void {
    this.parentform = this.controlContainer.control as FormGroup;
  }
}
