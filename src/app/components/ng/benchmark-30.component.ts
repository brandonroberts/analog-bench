
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-30',
    template: `<div class="benchmark-component">
    <h3>Component 30</h3>
    <button type="button" (click)="increment30()">
      Count {{ count30() }}
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
  export class BenchmarkNg30 {
    count30 = signal(0);

    increment30() {
      this.count30.update((count) => count + 1);
    }
  }