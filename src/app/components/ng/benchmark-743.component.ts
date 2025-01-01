
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-743',
    template: `<div class="benchmark-component">
    <h3>Component 743</h3>
    <button type="button" (click)="increment743()">
      Count {{ count743() }}
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
  export class BenchmarkNg743 {
    count743 = signal(0);

    increment743() {
      this.count743.update((count) => count + 1);
    }
  }