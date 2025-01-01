
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1363',
    template: `<div class="benchmark-component">
    <h3>Component 1363</h3>
    <button type="button" (click)="increment1363()">
      Count {{ count1363() }}
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
  export class BenchmarkNg1363 {
    count1363 = signal(0);

    increment1363() {
      this.count1363.update((count) => count + 1);
    }
  }