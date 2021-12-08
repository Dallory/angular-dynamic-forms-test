import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlConfiguration } from './models/FormControlConfiguration';
import { DataService } from './services/dataservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formControlConfigurationList: FormControlConfiguration[];
  dynamicForm: FormGroup;
  viewModel: {
    firstname: string;
    name: string;
    gender: string;
    friends: string[];
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.viewModel = this.dataService.getViewModel();
    var test = '';

    this.formControlConfigurationList =
      this.dataService.getFormControlConfiguration();

    this.dynamicForm = this.generateForm();
  }

  generateForm(): FormGroup {
    const form: any = {};
    this.formControlConfigurationList.forEach((config) => {
      let validators = [];
      if (config.required) {
        validators.push(Validators.required);
      }
      form[config.name] = new FormControl(
        this.viewModel[config.name],
        validators
      );
    });

    return new FormGroup(form);
  }
}
