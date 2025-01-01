
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1095',
    template: `<div class="benchmark-component">
    <h3>Component 1095</h3>
    <button type="button" (click)="increment1095()">
      Count {{ count1095() }}
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
  export class BenchmarkNg1095 {
    count1095 = signal(0);

    increment1095() {
      this.count1095.update((count) => count + 1);
    }
  }