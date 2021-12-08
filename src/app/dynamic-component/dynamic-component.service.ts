import { Injectable, Type } from '@angular/core';
import { DynamicGenderComponent } from './dynamic-components/dynamic-gender/dynamic-gender.component';
import { DynamicTextComponent } from './dynamic-components/dynamic-text/dynamic-text.component';
import { DynamicTextlistComponent } from './dynamic-components/dynamic-textlist/dynamic-textlist.component';

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentService {
  components: DynamicComponentMap[] = [
    new DynamicComponentMap('text', DynamicTextComponent),
    new DynamicComponentMap('gender', DynamicGenderComponent),
    new DynamicComponentMap('textlist', DynamicTextlistComponent),
  ];

  constructor() {}

  getDynamicComponent(componentName: string): DynamicComponent {
    //Wir müssen uns das richtige Component raussuchen..
    for (let i = 0; i < this.components.length; i++) {
      const c = this.components[i];

      if (c.name == componentName) {
        //Und zurück geben..
        console.log(c.name);
        return new DynamicComponent(c.component);
      }
    }

    console.log('DefaultComponent');
    return new DynamicComponent(DynamicTextComponent);
  }
}

export class DynamicComponent {
  constructor(public component: Type<any>) {}
}

export class DynamicComponentMap {
  name: string = '';
  component: any = {};

  constructor(name: string = '', component: any = {}) {
    this.name = name;
    this.component = component;
  }
}
