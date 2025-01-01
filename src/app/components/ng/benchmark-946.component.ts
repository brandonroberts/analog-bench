
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-946',
    template: `<div class="benchmark-component">
    <h3>Component 946</h3>
    <button type="button" (click)="increment946()">
      Count {{ count946() }}
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
  export class BenchmarkNg946 {
    count946 = signal(0);

    increment946() {
      this.count946.update((count) => count + 1);
    }
  }