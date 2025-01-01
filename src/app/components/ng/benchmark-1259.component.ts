
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1259',
    template: `<div class="benchmark-component">
    <h3>Component 1259</h3>
    <button type="button" (click)="increment1259()">
      Count {{ count1259() }}
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
  export class BenchmarkNg1259 {
    count1259 = signal(0);

    increment1259() {
      this.count1259.update((count) => count + 1);
    }
  }