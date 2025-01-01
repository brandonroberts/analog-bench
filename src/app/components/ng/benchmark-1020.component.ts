
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1020',
    template: `<div class="benchmark-component">
    <h3>Component 1020</h3>
    <button type="button" (click)="increment1020()">
      Count {{ count1020() }}
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
  export class BenchmarkNg1020 {
    count1020 = signal(0);

    increment1020() {
      this.count1020.update((count) => count + 1);
    }
  }