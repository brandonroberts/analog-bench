
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1074',
    template: `<div class="benchmark-component">
    <h3>Component 1074</h3>
    <button type="button" (click)="increment1074()">
      Count {{ count1074() }}
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
  export class BenchmarkNg1074 {
    count1074 = signal(0);

    increment1074() {
      this.count1074.update((count) => count + 1);
    }
  }