
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1098',
    template: `<div class="benchmark-component">
    <h3>Component 1098</h3>
    <button type="button" (click)="increment1098()">
      Count {{ count1098() }}
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
  export class BenchmarkNg1098 {
    count1098 = signal(0);

    increment1098() {
      this.count1098.update((count) => count + 1);
    }
  }