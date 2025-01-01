
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-385',
    template: `<div class="benchmark-component">
    <h3>Component 385</h3>
    <button type="button" (click)="increment385()">
      Count {{ count385() }}
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
  export class BenchmarkNg385 {
    count385 = signal(0);

    increment385() {
      this.count385.update((count) => count + 1);
    }
  }