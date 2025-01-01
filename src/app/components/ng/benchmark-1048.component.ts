
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1048',
    template: `<div class="benchmark-component">
    <h3>Component 1048</h3>
    <button type="button" (click)="increment1048()">
      Count {{ count1048() }}
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
  export class BenchmarkNg1048 {
    count1048 = signal(0);

    increment1048() {
      this.count1048.update((count) => count + 1);
    }
  }