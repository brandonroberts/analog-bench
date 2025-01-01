
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1051',
    template: `<div class="benchmark-component">
    <h3>Component 1051</h3>
    <button type="button" (click)="increment1051()">
      Count {{ count1051() }}
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
  export class BenchmarkNg1051 {
    count1051 = signal(0);

    increment1051() {
      this.count1051.update((count) => count + 1);
    }
  }