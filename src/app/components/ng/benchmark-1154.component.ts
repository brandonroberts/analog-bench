
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1154',
    template: `<div class="benchmark-component">
    <h3>Component 1154</h3>
    <button type="button" (click)="increment1154()">
      Count {{ count1154() }}
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
  export class BenchmarkNg1154 {
    count1154 = signal(0);

    increment1154() {
      this.count1154.update((count) => count + 1);
    }
  }