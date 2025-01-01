
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-983',
    template: `<div class="benchmark-component">
    <h3>Component 983</h3>
    <button type="button" (click)="increment983()">
      Count {{ count983() }}
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
  export class BenchmarkNg983 {
    count983 = signal(0);

    increment983() {
      this.count983.update((count) => count + 1);
    }
  }