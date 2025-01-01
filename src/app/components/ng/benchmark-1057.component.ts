
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1057',
    template: `<div class="benchmark-component">
    <h3>Component 1057</h3>
    <button type="button" (click)="increment1057()">
      Count {{ count1057() }}
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
  export class BenchmarkNg1057 {
    count1057 = signal(0);

    increment1057() {
      this.count1057.update((count) => count + 1);
    }
  }