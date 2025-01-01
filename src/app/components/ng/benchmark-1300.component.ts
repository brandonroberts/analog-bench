
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1300',
    template: `<div class="benchmark-component">
    <h3>Component 1300</h3>
    <button type="button" (click)="increment1300()">
      Count {{ count1300() }}
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
  export class BenchmarkNg1300 {
    count1300 = signal(0);

    increment1300() {
      this.count1300.update((count) => count + 1);
    }
  }