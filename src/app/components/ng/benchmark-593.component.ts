
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-593',
    template: `<div class="benchmark-component">
    <h3>Component 593</h3>
    <button type="button" (click)="increment593()">
      Count {{ count593() }}
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
  export class BenchmarkNg593 {
    count593 = signal(0);

    increment593() {
      this.count593.update((count) => count + 1);
    }
  }