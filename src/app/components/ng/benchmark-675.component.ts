
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-675',
    template: `<div class="benchmark-component">
    <h3>Component 675</h3>
    <button type="button" (click)="increment675()">
      Count {{ count675() }}
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
  export class BenchmarkNg675 {
    count675 = signal(0);

    increment675() {
      this.count675.update((count) => count + 1);
    }
  }