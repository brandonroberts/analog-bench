
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1012',
    template: `<div class="benchmark-component">
    <h3>Component 1012</h3>
    <button type="button" (click)="increment1012()">
      Count {{ count1012() }}
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
  export class BenchmarkNg1012 {
    count1012 = signal(0);

    increment1012() {
      this.count1012.update((count) => count + 1);
    }
  }