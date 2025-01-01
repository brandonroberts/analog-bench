
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1397',
    template: `<div class="benchmark-component">
    <h3>Component 1397</h3>
    <button type="button" (click)="increment1397()">
      Count {{ count1397() }}
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
  export class BenchmarkNg1397 {
    count1397 = signal(0);

    increment1397() {
      this.count1397.update((count) => count + 1);
    }
  }