
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1036',
    template: `<div class="benchmark-component">
    <h3>Component 1036</h3>
    <button type="button" (click)="increment1036()">
      Count {{ count1036() }}
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
  export class BenchmarkNg1036 {
    count1036 = signal(0);

    increment1036() {
      this.count1036.update((count) => count + 1);
    }
  }