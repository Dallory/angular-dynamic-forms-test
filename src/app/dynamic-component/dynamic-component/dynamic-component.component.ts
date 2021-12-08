import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlConfiguration } from '../../models/FormControlConfiguration';
import { DynamicComponentHostDirective } from '../dynamic-component-host.directive';
import { DynamicComponentService } from '../dynamic-component.service';
import { DynamicTextComponent } from '../dynamic-components/dynamic-text/dynamic-text.component';

@Component({
  selector: 'dynamic-component',
  templateUrl: './dynamic-component.component.html',
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild(DynamicComponentHostDirective, { static: true })
  dynamicComponentHost!: DynamicComponentHostDirective;

  @Input() formControlConfiguration: FormControlConfiguration;

  constructor(
    private service: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  onChange!: (value: any) => void;

  ngOnInit(): void {
    const dynamicComponent = this.service.getDynamicComponent(
      this.formControlConfiguration.component
    );
    const viewContainerRef = this.dynamicComponentHost.viewContainerRef;
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        dynamicComponent.component
      );

    const componentRef =
      viewContainerRef.createComponent<DynamicComponentModel>(componentFactory);

    componentRef.instance.formControlConfiguration =
      this.formControlConfiguration;
  }
}

export class DynamicComponentModel {
  formControlConfiguration: FormControlConfiguration;
  parentform: FormGroup;
}
