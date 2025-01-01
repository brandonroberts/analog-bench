
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1213',
    template: `<div class="benchmark-component">
    <h3>Component 1213</h3>
    <button type="button" (click)="increment1213()">
      Count {{ count1213() }}
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
  export class BenchmarkNg1213 {
    count1213 = signal(0);

    increment1213() {
      this.count1213.update((count) => count + 1);
    }
  }