
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1109',
    template: `<div class="benchmark-component">
    <h3>Component 1109</h3>
    <button type="button" (click)="increment1109()">
      Count {{ count1109() }}
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
  export class BenchmarkNg1109 {
    count1109 = signal(0);

    increment1109() {
      this.count1109.update((count) => count + 1);
    }
  }