
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-297',
    template: `<div class="benchmark-component">
    <h3>Component 297</h3>
    <button type="button" (click)="increment297()">
      Count {{ count297() }}
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
  export class BenchmarkNg297 {
    count297 = signal(0);

    increment297() {
      this.count297.update((count) => count + 1);
    }
  }