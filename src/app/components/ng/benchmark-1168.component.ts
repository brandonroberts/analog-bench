
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1168',
    template: `<div class="benchmark-component">
    <h3>Component 1168</h3>
    <button type="button" (click)="increment1168()">
      Count {{ count1168() }}
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
  export class BenchmarkNg1168 {
    count1168 = signal(0);

    increment1168() {
      this.count1168.update((count) => count + 1);
    }
  }