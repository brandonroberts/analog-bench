
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1200',
    template: `<div class="benchmark-component">
    <h3>Component 1200</h3>
    <button type="button" (click)="increment1200()">
      Count {{ count1200() }}
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
  export class BenchmarkNg1200 {
    count1200 = signal(0);

    increment1200() {
      this.count1200.update((count) => count + 1);
    }
  }