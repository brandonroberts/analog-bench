
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1181',
    template: `<div class="benchmark-component">
    <h3>Component 1181</h3>
    <button type="button" (click)="increment1181()">
      Count {{ count1181() }}
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
  export class BenchmarkNg1181 {
    count1181 = signal(0);

    increment1181() {
      this.count1181.update((count) => count + 1);
    }
  }