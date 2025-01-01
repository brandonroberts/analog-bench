
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-363',
    template: `<div class="benchmark-component">
    <h3>Component 363</h3>
    <button type="button" (click)="increment363()">
      Count {{ count363() }}
    </button>
  </div>`,
  styles: `
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  `,
    standalone: true,
  })
  export class BenchmarkNg363 {
    count363 = signal(0);

    increment363() {
      this.count363.update((count) => count + 1);
    }
  }