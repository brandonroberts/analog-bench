
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-930',
    template: `<div class="benchmark-component">
    <h3>Component 930</h3>
    <button type="button" (click)="increment930()">
      Count {{ count930() }}
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
  export class BenchmarkNg930 {
    count930 = signal(0);

    increment930() {
      this.count930.update((count) => count + 1);
    }
  }