
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1126',
    template: `<div class="benchmark-component">
    <h3>Component 1126</h3>
    <button type="button" (click)="increment1126()">
      Count {{ count1126() }}
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
  export class BenchmarkNg1126 {
    count1126 = signal(0);

    increment1126() {
      this.count1126.update((count) => count + 1);
    }
  }