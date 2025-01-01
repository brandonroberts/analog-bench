
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1254',
    template: `<div class="benchmark-component">
    <h3>Component 1254</h3>
    <button type="button" (click)="increment1254()">
      Count {{ count1254() }}
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
  export class BenchmarkNg1254 {
    count1254 = signal(0);

    increment1254() {
      this.count1254.update((count) => count + 1);
    }
  }