
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-890',
    template: `<div class="benchmark-component">
    <h3>Component 890</h3>
    <button type="button" (click)="increment890()">
      Count {{ count890() }}
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
  export class BenchmarkNg890 {
    count890 = signal(0);

    increment890() {
      this.count890.update((count) => count + 1);
    }
  }