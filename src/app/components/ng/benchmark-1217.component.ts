
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1217',
    template: `<div class="benchmark-component">
    <h3>Component 1217</h3>
    <button type="button" (click)="increment1217()">
      Count {{ count1217() }}
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
  export class BenchmarkNg1217 {
    count1217 = signal(0);

    increment1217() {
      this.count1217.update((count) => count + 1);
    }
  }