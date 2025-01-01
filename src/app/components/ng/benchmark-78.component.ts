
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-78',
    template: `<div class="benchmark-component">
    <h3>Component 78</h3>
    <button type="button" (click)="increment78()">
      Count {{ count78() }}
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
  export class BenchmarkNg78 {
    count78 = signal(0);

    increment78() {
      this.count78.update((count) => count + 1);
    }
  }