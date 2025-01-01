
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-600',
    template: `<div class="benchmark-component">
    <h3>Component 600</h3>
    <button type="button" (click)="increment600()">
      Count {{ count600() }}
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
  export class BenchmarkNg600 {
    count600 = signal(0);

    increment600() {
      this.count600.update((count) => count + 1);
    }
  }