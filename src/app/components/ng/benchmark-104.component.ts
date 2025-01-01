
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-104',
    template: `<div class="benchmark-component">
    <h3>Component 104</h3>
    <button type="button" (click)="increment104()">
      Count {{ count104() }}
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
  export class BenchmarkNg104 {
    count104 = signal(0);

    increment104() {
      this.count104.update((count) => count + 1);
    }
  }