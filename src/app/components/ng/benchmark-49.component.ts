
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-49',
    template: `<div class="benchmark-component">
    <h3>Component 49</h3>
    <button type="button" (click)="increment49()">
      Count {{ count49() }}
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
  export class BenchmarkNg49 {
    count49 = signal(0);

    increment49() {
      this.count49.update((count) => count + 1);
    }
  }