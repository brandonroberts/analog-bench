
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-592',
    template: `<div class="benchmark-component">
    <h3>Component 592</h3>
    <button type="button" (click)="increment592()">
      Count {{ count592() }}
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
  export class BenchmarkNg592 {
    count592 = signal(0);

    increment592() {
      this.count592.update((count) => count + 1);
    }
  }