
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-528',
    template: `<div class="benchmark-component">
    <h3>Component 528</h3>
    <button type="button" (click)="increment528()">
      Count {{ count528() }}
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
  export class BenchmarkNg528 {
    count528 = signal(0);

    increment528() {
      this.count528.update((count) => count + 1);
    }
  }