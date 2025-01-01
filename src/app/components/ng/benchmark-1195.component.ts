
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1195',
    template: `<div class="benchmark-component">
    <h3>Component 1195</h3>
    <button type="button" (click)="increment1195()">
      Count {{ count1195() }}
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
  export class BenchmarkNg1195 {
    count1195 = signal(0);

    increment1195() {
      this.count1195.update((count) => count + 1);
    }
  }