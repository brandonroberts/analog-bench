
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1013',
    template: `<div class="benchmark-component">
    <h3>Component 1013</h3>
    <button type="button" (click)="increment1013()">
      Count {{ count1013() }}
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
  export class BenchmarkNg1013 {
    count1013 = signal(0);

    increment1013() {
      this.count1013.update((count) => count + 1);
    }
  }