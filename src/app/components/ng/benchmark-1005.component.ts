
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1005',
    template: `<div class="benchmark-component">
    <h3>Component 1005</h3>
    <button type="button" (click)="increment1005()">
      Count {{ count1005() }}
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
  export class BenchmarkNg1005 {
    count1005 = signal(0);

    increment1005() {
      this.count1005.update((count) => count + 1);
    }
  }