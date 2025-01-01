
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1066',
    template: `<div class="benchmark-component">
    <h3>Component 1066</h3>
    <button type="button" (click)="increment1066()">
      Count {{ count1066() }}
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
  export class BenchmarkNg1066 {
    count1066 = signal(0);

    increment1066() {
      this.count1066.update((count) => count + 1);
    }
  }