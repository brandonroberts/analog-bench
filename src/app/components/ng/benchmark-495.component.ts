
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-495',
    template: `<div class="benchmark-component">
    <h3>Component 495</h3>
    <button type="button" (click)="increment495()">
      Count {{ count495() }}
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
  export class BenchmarkNg495 {
    count495 = signal(0);

    increment495() {
      this.count495.update((count) => count + 1);
    }
  }