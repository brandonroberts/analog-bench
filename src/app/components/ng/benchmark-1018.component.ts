
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1018',
    template: `<div class="benchmark-component">
    <h3>Component 1018</h3>
    <button type="button" (click)="increment1018()">
      Count {{ count1018() }}
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
  export class BenchmarkNg1018 {
    count1018 = signal(0);

    increment1018() {
      this.count1018.update((count) => count + 1);
    }
  }