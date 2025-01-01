
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-35',
    template: `<div class="benchmark-component">
    <h3>Component 35</h3>
    <button type="button" (click)="increment35()">
      Count {{ count35() }}
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
  export class BenchmarkNg35 {
    count35 = signal(0);

    increment35() {
      this.count35.update((count) => count + 1);
    }
  }