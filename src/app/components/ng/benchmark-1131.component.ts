
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1131',
    template: `<div class="benchmark-component">
    <h3>Component 1131</h3>
    <button type="button" (click)="increment1131()">
      Count {{ count1131() }}
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
  export class BenchmarkNg1131 {
    count1131 = signal(0);

    increment1131() {
      this.count1131.update((count) => count + 1);
    }
  }