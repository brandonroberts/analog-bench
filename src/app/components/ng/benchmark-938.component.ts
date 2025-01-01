
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-938',
    template: `<div class="benchmark-component">
    <h3>Component 938</h3>
    <button type="button" (click)="increment938()">
      Count {{ count938() }}
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
  export class BenchmarkNg938 {
    count938 = signal(0);

    increment938() {
      this.count938.update((count) => count + 1);
    }
  }