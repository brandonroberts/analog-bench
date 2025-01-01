
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-677',
    template: `<div class="benchmark-component">
    <h3>Component 677</h3>
    <button type="button" (click)="increment677()">
      Count {{ count677() }}
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
  export class BenchmarkNg677 {
    count677 = signal(0);

    increment677() {
      this.count677.update((count) => count + 1);
    }
  }