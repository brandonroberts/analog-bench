
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1067',
    template: `<div class="benchmark-component">
    <h3>Component 1067</h3>
    <button type="button" (click)="increment1067()">
      Count {{ count1067() }}
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
  export class BenchmarkNg1067 {
    count1067 = signal(0);

    increment1067() {
      this.count1067.update((count) => count + 1);
    }
  }