
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-442',
    template: `<div class="benchmark-component">
    <h3>Component 442</h3>
    <button type="button" (click)="increment442()">
      Count {{ count442() }}
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
  export class BenchmarkNg442 {
    count442 = signal(0);

    increment442() {
      this.count442.update((count) => count + 1);
    }
  }