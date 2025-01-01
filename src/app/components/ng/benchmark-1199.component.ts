
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1199',
    template: `<div class="benchmark-component">
    <h3>Component 1199</h3>
    <button type="button" (click)="increment1199()">
      Count {{ count1199() }}
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
  export class BenchmarkNg1199 {
    count1199 = signal(0);

    increment1199() {
      this.count1199.update((count) => count + 1);
    }
  }