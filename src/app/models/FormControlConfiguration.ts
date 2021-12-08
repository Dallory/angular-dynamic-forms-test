export class FormControlConfiguration {
  label: string = '';
  name: string = '';
  readonly: boolean = false;
  required: boolean = false;
  component: string = '';

  constructor(
    label: string = '',
    name: string = '',
    readonly = false,
    required = false,
    component: string = ''
  ) {
    this.label = label;
    this.name = name;
    this.readonly = readonly;
    this.required = required;
    this.component = component;
  }
}
