
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1016',
    template: `<div class="benchmark-component">
    <h3>Component 1016</h3>
    <button type="button" (click)="increment1016()">
      Count {{ count1016() }}
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
  export class BenchmarkNg1016 {
    count1016 = signal(0);

    increment1016() {
      this.count1016.update((count) => count + 1);
    }
  }