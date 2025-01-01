
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1007',
    template: `<div class="benchmark-component">
    <h3>Component 1007</h3>
    <button type="button" (click)="increment1007()">
      Count {{ count1007() }}
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
  export class BenchmarkNg1007 {
    count1007 = signal(0);

    increment1007() {
      this.count1007.update((count) => count + 1);
    }
  }