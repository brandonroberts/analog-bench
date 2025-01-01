
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-441',
    template: `<div class="benchmark-component">
    <h3>Component 441</h3>
    <button type="button" (click)="increment441()">
      Count {{ count441() }}
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
  export class BenchmarkNg441 {
    count441 = signal(0);

    increment441() {
      this.count441.update((count) => count + 1);
    }
  }