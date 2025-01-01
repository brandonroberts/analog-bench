
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-462',
    template: `<div class="benchmark-component">
    <h3>Component 462</h3>
    <button type="button" (click)="increment462()">
      Count {{ count462() }}
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
  export class BenchmarkNg462 {
    count462 = signal(0);

    increment462() {
      this.count462.update((count) => count + 1);
    }
  }