
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1071',
    template: `<div class="benchmark-component">
    <h3>Component 1071</h3>
    <button type="button" (click)="increment1071()">
      Count {{ count1071() }}
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
  export class BenchmarkNg1071 {
    count1071 = signal(0);

    increment1071() {
      this.count1071.update((count) => count + 1);
    }
  }