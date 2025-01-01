
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-131',
    template: `<div class="benchmark-component">
    <h3>Component 131</h3>
    <button type="button" (click)="increment131()">
      Count {{ count131() }}
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
  export class BenchmarkNg131 {
    count131 = signal(0);

    increment131() {
      this.count131.update((count) => count + 1);
    }
  }