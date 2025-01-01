
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1368',
    template: `<div class="benchmark-component">
    <h3>Component 1368</h3>
    <button type="button" (click)="increment1368()">
      Count {{ count1368() }}
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
  export class BenchmarkNg1368 {
    count1368 = signal(0);

    increment1368() {
      this.count1368.update((count) => count + 1);
    }
  }