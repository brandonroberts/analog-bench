
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-929',
    template: `<div class="benchmark-component">
    <h3>Component 929</h3>
    <button type="button" (click)="increment929()">
      Count {{ count929() }}
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
  export class BenchmarkNg929 {
    count929 = signal(0);

    increment929() {
      this.count929.update((count) => count + 1);
    }
  }