
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1054',
    template: `<div class="benchmark-component">
    <h3>Component 1054</h3>
    <button type="button" (click)="increment1054()">
      Count {{ count1054() }}
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
  export class BenchmarkNg1054 {
    count1054 = signal(0);

    increment1054() {
      this.count1054.update((count) => count + 1);
    }
  }