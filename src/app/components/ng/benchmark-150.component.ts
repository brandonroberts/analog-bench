
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-150',
    template: `<div class="benchmark-component">
    <h3>Component 150</h3>
    <button type="button" (click)="increment150()">
      Count {{ count150() }}
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
  export class BenchmarkNg150 {
    count150 = signal(0);

    increment150() {
      this.count150.update((count) => count + 1);
    }
  }