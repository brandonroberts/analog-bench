
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1113',
    template: `<div class="benchmark-component">
    <h3>Component 1113</h3>
    <button type="button" (click)="increment1113()">
      Count {{ count1113() }}
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
  export class BenchmarkNg1113 {
    count1113 = signal(0);

    increment1113() {
      this.count1113.update((count) => count + 1);
    }
  }