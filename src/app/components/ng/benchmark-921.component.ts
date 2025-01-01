
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-921',
    template: `<div class="benchmark-component">
    <h3>Component 921</h3>
    <button type="button" (click)="increment921()">
      Count {{ count921() }}
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
  export class BenchmarkNg921 {
    count921 = signal(0);

    increment921() {
      this.count921.update((count) => count + 1);
    }
  }