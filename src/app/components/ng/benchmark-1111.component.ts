
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1111',
    template: `<div class="benchmark-component">
    <h3>Component 1111</h3>
    <button type="button" (click)="increment1111()">
      Count {{ count1111() }}
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
  export class BenchmarkNg1111 {
    count1111 = signal(0);

    increment1111() {
      this.count1111.update((count) => count + 1);
    }
  }