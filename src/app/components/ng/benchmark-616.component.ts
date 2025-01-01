
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-616',
    template: `<div class="benchmark-component">
    <h3>Component 616</h3>
    <button type="button" (click)="increment616()">
      Count {{ count616() }}
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
  export class BenchmarkNg616 {
    count616 = signal(0);

    increment616() {
      this.count616.update((count) => count + 1);
    }
  }