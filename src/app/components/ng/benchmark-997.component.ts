
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-997',
    template: `<div class="benchmark-component">
    <h3>Component 997</h3>
    <button type="button" (click)="increment997()">
      Count {{ count997() }}
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
  export class BenchmarkNg997 {
    count997 = signal(0);

    increment997() {
      this.count997.update((count) => count + 1);
    }
  }