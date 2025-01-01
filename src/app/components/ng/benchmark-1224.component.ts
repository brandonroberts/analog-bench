
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1224',
    template: `<div class="benchmark-component">
    <h3>Component 1224</h3>
    <button type="button" (click)="increment1224()">
      Count {{ count1224() }}
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
  export class BenchmarkNg1224 {
    count1224 = signal(0);

    increment1224() {
      this.count1224.update((count) => count + 1);
    }
  }