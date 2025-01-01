
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1061',
    template: `<div class="benchmark-component">
    <h3>Component 1061</h3>
    <button type="button" (click)="increment1061()">
      Count {{ count1061() }}
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
  export class BenchmarkNg1061 {
    count1061 = signal(0);

    increment1061() {
      this.count1061.update((count) => count + 1);
    }
  }