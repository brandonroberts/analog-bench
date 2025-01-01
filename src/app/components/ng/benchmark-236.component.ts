
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-236',
    template: `<div class="benchmark-component">
    <h3>Component 236</h3>
    <button type="button" (click)="increment236()">
      Count {{ count236() }}
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
  export class BenchmarkNg236 {
    count236 = signal(0);

    increment236() {
      this.count236.update((count) => count + 1);
    }
  }