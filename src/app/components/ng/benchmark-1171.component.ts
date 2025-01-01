
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1171',
    template: `<div class="benchmark-component">
    <h3>Component 1171</h3>
    <button type="button" (click)="increment1171()">
      Count {{ count1171() }}
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
  export class BenchmarkNg1171 {
    count1171 = signal(0);

    increment1171() {
      this.count1171.update((count) => count + 1);
    }
  }