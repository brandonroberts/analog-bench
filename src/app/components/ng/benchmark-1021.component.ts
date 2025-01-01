
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1021',
    template: `<div class="benchmark-component">
    <h3>Component 1021</h3>
    <button type="button" (click)="increment1021()">
      Count {{ count1021() }}
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
  export class BenchmarkNg1021 {
    count1021 = signal(0);

    increment1021() {
      this.count1021.update((count) => count + 1);
    }
  }