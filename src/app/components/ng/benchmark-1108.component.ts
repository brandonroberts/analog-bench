
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1108',
    template: `<div class="benchmark-component">
    <h3>Component 1108</h3>
    <button type="button" (click)="increment1108()">
      Count {{ count1108() }}
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
  export class BenchmarkNg1108 {
    count1108 = signal(0);

    increment1108() {
      this.count1108.update((count) => count + 1);
    }
  }