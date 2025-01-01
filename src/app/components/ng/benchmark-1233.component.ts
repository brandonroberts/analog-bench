
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1233',
    template: `<div class="benchmark-component">
    <h3>Component 1233</h3>
    <button type="button" (click)="increment1233()">
      Count {{ count1233() }}
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
  export class BenchmarkNg1233 {
    count1233 = signal(0);

    increment1233() {
      this.count1233.update((count) => count + 1);
    }
  }