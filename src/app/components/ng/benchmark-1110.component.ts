
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1110',
    template: `<div class="benchmark-component">
    <h3>Component 1110</h3>
    <button type="button" (click)="increment1110()">
      Count {{ count1110() }}
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
  export class BenchmarkNg1110 {
    count1110 = signal(0);

    increment1110() {
      this.count1110.update((count) => count + 1);
    }
  }