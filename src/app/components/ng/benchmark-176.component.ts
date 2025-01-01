
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-176',
    template: `<div class="benchmark-component">
    <h3>Component 176</h3>
    <button type="button" (click)="increment176()">
      Count {{ count176() }}
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
  export class BenchmarkNg176 {
    count176 = signal(0);

    increment176() {
      this.count176.update((count) => count + 1);
    }
  }