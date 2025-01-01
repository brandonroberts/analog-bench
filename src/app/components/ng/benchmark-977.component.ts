
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-977',
    template: `<div class="benchmark-component">
    <h3>Component 977</h3>
    <button type="button" (click)="increment977()">
      Count {{ count977() }}
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
  export class BenchmarkNg977 {
    count977 = signal(0);

    increment977() {
      this.count977.update((count) => count + 1);
    }
  }