
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1373',
    template: `<div class="benchmark-component">
    <h3>Component 1373</h3>
    <button type="button" (click)="increment1373()">
      Count {{ count1373() }}
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
  export class BenchmarkNg1373 {
    count1373 = signal(0);

    increment1373() {
      this.count1373.update((count) => count + 1);
    }
  }