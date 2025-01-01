
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1040',
    template: `<div class="benchmark-component">
    <h3>Component 1040</h3>
    <button type="button" (click)="increment1040()">
      Count {{ count1040() }}
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
  export class BenchmarkNg1040 {
    count1040 = signal(0);

    increment1040() {
      this.count1040.update((count) => count + 1);
    }
  }