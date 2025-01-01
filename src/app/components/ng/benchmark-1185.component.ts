
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1185',
    template: `<div class="benchmark-component">
    <h3>Component 1185</h3>
    <button type="button" (click)="increment1185()">
      Count {{ count1185() }}
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
  export class BenchmarkNg1185 {
    count1185 = signal(0);

    increment1185() {
      this.count1185.update((count) => count + 1);
    }
  }