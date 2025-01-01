
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1243',
    template: `<div class="benchmark-component">
    <h3>Component 1243</h3>
    <button type="button" (click)="increment1243()">
      Count {{ count1243() }}
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
  export class BenchmarkNg1243 {
    count1243 = signal(0);

    increment1243() {
      this.count1243.update((count) => count + 1);
    }
  }