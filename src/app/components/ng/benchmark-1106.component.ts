
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1106',
    template: `<div class="benchmark-component">
    <h3>Component 1106</h3>
    <button type="button" (click)="increment1106()">
      Count {{ count1106() }}
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
  export class BenchmarkNg1106 {
    count1106 = signal(0);

    increment1106() {
      this.count1106.update((count) => count + 1);
    }
  }