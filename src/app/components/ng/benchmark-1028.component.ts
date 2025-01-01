
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1028',
    template: `<div class="benchmark-component">
    <h3>Component 1028</h3>
    <button type="button" (click)="increment1028()">
      Count {{ count1028() }}
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
  export class BenchmarkNg1028 {
    count1028 = signal(0);

    increment1028() {
      this.count1028.update((count) => count + 1);
    }
  }