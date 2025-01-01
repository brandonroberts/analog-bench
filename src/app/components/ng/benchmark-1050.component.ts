
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1050',
    template: `<div class="benchmark-component">
    <h3>Component 1050</h3>
    <button type="button" (click)="increment1050()">
      Count {{ count1050() }}
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
  export class BenchmarkNg1050 {
    count1050 = signal(0);

    increment1050() {
      this.count1050.update((count) => count + 1);
    }
  }