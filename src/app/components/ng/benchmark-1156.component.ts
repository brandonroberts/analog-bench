
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1156',
    template: `<div class="benchmark-component">
    <h3>Component 1156</h3>
    <button type="button" (click)="increment1156()">
      Count {{ count1156() }}
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
  export class BenchmarkNg1156 {
    count1156 = signal(0);

    increment1156() {
      this.count1156.update((count) => count + 1);
    }
  }