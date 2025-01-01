
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1291',
    template: `<div class="benchmark-component">
    <h3>Component 1291</h3>
    <button type="button" (click)="increment1291()">
      Count {{ count1291() }}
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
  export class BenchmarkNg1291 {
    count1291 = signal(0);

    increment1291() {
      this.count1291.update((count) => count + 1);
    }
  }