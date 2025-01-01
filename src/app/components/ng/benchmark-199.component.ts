
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-199',
    template: `<div class="benchmark-component">
    <h3>Component 199</h3>
    <button type="button" (click)="increment199()">
      Count {{ count199() }}
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
  export class BenchmarkNg199 {
    count199 = signal(0);

    increment199() {
      this.count199.update((count) => count + 1);
    }
  }