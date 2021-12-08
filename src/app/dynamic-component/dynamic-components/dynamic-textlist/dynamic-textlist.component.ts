import { Component, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormControlConfiguration } from '../../../models/FormControlConfiguration';

@Component({
  selector: 'dynamic-textlist',
  templateUrl: './dynamic-textlist.component.html',
})
export class DynamicTextlistComponent implements OnInit {
  parentform!: FormGroup;
  @Input() formControlConfiguration!: FormControlConfiguration;
  textlist: string[];
  newFriend: string;

  constructor(private controlContainer: ControlContainer) {}
  ngOnInit(): void {
    this.parentform = this.controlContainer.control as FormGroup;
    this.textlist = this.parentform.get(
      this.formControlConfiguration.name
    )?.value;
  }

  addFriend(): void {
    this.textlist.push(this.newFriend);
    this.newFriend = '';
  }
}
