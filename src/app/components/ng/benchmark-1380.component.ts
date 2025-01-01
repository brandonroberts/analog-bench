
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1380',
    template: `<div class="benchmark-component">
    <h3>Component 1380</h3>
    <button type="button" (click)="increment1380()">
      Count {{ count1380() }}
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
  export class BenchmarkNg1380 {
    count1380 = signal(0);

    increment1380() {
      this.count1380.update((count) => count + 1);
    }
  }