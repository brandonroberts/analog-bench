
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1370',
    template: `<div class="benchmark-component">
    <h3>Component 1370</h3>
    <button type="button" (click)="increment1370()">
      Count {{ count1370() }}
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
  export class BenchmarkNg1370 {
    count1370 = signal(0);

    increment1370() {
      this.count1370.update((count) => count + 1);
    }
  }