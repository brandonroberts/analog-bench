
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1308',
    template: `<div class="benchmark-component">
    <h3>Component 1308</h3>
    <button type="button" (click)="increment1308()">
      Count {{ count1308() }}
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
  export class BenchmarkNg1308 {
    count1308 = signal(0);

    increment1308() {
      this.count1308.update((count) => count + 1);
    }
  }