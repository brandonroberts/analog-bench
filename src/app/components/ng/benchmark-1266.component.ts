
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1266',
    template: `<div class="benchmark-component">
    <h3>Component 1266</h3>
    <button type="button" (click)="increment1266()">
      Count {{ count1266() }}
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
  export class BenchmarkNg1266 {
    count1266 = signal(0);

    increment1266() {
      this.count1266.update((count) => count + 1);
    }
  }