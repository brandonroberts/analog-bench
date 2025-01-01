
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1165',
    template: `<div class="benchmark-component">
    <h3>Component 1165</h3>
    <button type="button" (click)="increment1165()">
      Count {{ count1165() }}
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
  export class BenchmarkNg1165 {
    count1165 = signal(0);

    increment1165() {
      this.count1165.update((count) => count + 1);
    }
  }