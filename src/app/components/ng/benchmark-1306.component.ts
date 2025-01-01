
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1306',
    template: `<div class="benchmark-component">
    <h3>Component 1306</h3>
    <button type="button" (click)="increment1306()">
      Count {{ count1306() }}
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
  export class BenchmarkNg1306 {
    count1306 = signal(0);

    increment1306() {
      this.count1306.update((count) => count + 1);
    }
  }