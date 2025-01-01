
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1257',
    template: `<div class="benchmark-component">
    <h3>Component 1257</h3>
    <button type="button" (click)="increment1257()">
      Count {{ count1257() }}
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
  export class BenchmarkNg1257 {
    count1257 = signal(0);

    increment1257() {
      this.count1257.update((count) => count + 1);
    }
  }