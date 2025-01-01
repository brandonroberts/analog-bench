
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-261',
    template: `<div class="benchmark-component">
    <h3>Component 261</h3>
    <button type="button" (click)="increment261()">
      Count {{ count261() }}
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
  export class BenchmarkNg261 {
    count261 = signal(0);

    increment261() {
      this.count261.update((count) => count + 1);
    }
  }