
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1117',
    template: `<div class="benchmark-component">
    <h3>Component 1117</h3>
    <button type="button" (click)="increment1117()">
      Count {{ count1117() }}
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
  export class BenchmarkNg1117 {
    count1117 = signal(0);

    increment1117() {
      this.count1117.update((count) => count + 1);
    }
  }