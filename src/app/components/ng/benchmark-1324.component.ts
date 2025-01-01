
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1324',
    template: `<div class="benchmark-component">
    <h3>Component 1324</h3>
    <button type="button" (click)="increment1324()">
      Count {{ count1324() }}
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
  export class BenchmarkNg1324 {
    count1324 = signal(0);

    increment1324() {
      this.count1324.update((count) => count + 1);
    }
  }