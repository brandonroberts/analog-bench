
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1035',
    template: `<div class="benchmark-component">
    <h3>Component 1035</h3>
    <button type="button" (click)="increment1035()">
      Count {{ count1035() }}
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
  export class BenchmarkNg1035 {
    count1035 = signal(0);

    increment1035() {
      this.count1035.update((count) => count + 1);
    }
  }