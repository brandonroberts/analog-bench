
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1034',
    template: `<div class="benchmark-component">
    <h3>Component 1034</h3>
    <button type="button" (click)="increment1034()">
      Count {{ count1034() }}
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
  export class BenchmarkNg1034 {
    count1034 = signal(0);

    increment1034() {
      this.count1034.update((count) => count + 1);
    }
  }