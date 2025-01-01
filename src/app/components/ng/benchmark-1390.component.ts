
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1390',
    template: `<div class="benchmark-component">
    <h3>Component 1390</h3>
    <button type="button" (click)="increment1390()">
      Count {{ count1390() }}
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
  export class BenchmarkNg1390 {
    count1390 = signal(0);

    increment1390() {
      this.count1390.update((count) => count + 1);
    }
  }