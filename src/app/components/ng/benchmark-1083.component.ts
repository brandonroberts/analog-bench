
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1083',
    template: `<div class="benchmark-component">
    <h3>Component 1083</h3>
    <button type="button" (click)="increment1083()">
      Count {{ count1083() }}
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
  export class BenchmarkNg1083 {
    count1083 = signal(0);

    increment1083() {
      this.count1083.update((count) => count + 1);
    }
  }