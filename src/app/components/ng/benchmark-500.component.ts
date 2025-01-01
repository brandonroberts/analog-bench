
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-500',
    template: `<div class="benchmark-component">
    <h3>Component 500</h3>
    <button type="button" (click)="increment500()">
      Count {{ count500() }}
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
  export class BenchmarkNg500 {
    count500 = signal(0);

    increment500() {
      this.count500.update((count) => count + 1);
    }
  }