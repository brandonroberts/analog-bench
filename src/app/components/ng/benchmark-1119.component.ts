
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1119',
    template: `<div class="benchmark-component">
    <h3>Component 1119</h3>
    <button type="button" (click)="increment1119()">
      Count {{ count1119() }}
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
  export class BenchmarkNg1119 {
    count1119 = signal(0);

    increment1119() {
      this.count1119.update((count) => count + 1);
    }
  }