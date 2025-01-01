
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-401',
    template: `<div class="benchmark-component">
    <h3>Component 401</h3>
    <button type="button" (click)="increment401()">
      Count {{ count401() }}
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
  export class BenchmarkNg401 {
    count401 = signal(0);

    increment401() {
      this.count401.update((count) => count + 1);
    }
  }