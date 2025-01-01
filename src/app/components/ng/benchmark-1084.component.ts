
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1084',
    template: `<div class="benchmark-component">
    <h3>Component 1084</h3>
    <button type="button" (click)="increment1084()">
      Count {{ count1084() }}
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
  export class BenchmarkNg1084 {
    count1084 = signal(0);

    increment1084() {
      this.count1084.update((count) => count + 1);
    }
  }