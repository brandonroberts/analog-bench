
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-121',
    template: `<div class="benchmark-component">
    <h3>Component 121</h3>
    <button type="button" (click)="increment121()">
      Count {{ count121() }}
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
  export class BenchmarkNg121 {
    count121 = signal(0);

    increment121() {
      this.count121.update((count) => count + 1);
    }
  }