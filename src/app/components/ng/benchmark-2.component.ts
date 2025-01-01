
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-2',
    template: `<div class="benchmark-component">
    <h3>Component 2</h3>
    <button type="button" (click)="increment2()">
      Count {{ count2() }}
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
  export class BenchmarkNg2 {
    count2 = signal(0);

    increment2() {
      this.count2.update((count) => count + 1);
    }
  }