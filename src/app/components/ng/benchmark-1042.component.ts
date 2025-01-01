
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1042',
    template: `<div class="benchmark-component">
    <h3>Component 1042</h3>
    <button type="button" (click)="increment1042()">
      Count {{ count1042() }}
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
  export class BenchmarkNg1042 {
    count1042 = signal(0);

    increment1042() {
      this.count1042.update((count) => count + 1);
    }
  }