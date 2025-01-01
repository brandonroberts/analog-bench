
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1187',
    template: `<div class="benchmark-component">
    <h3>Component 1187</h3>
    <button type="button" (click)="increment1187()">
      Count {{ count1187() }}
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
  export class BenchmarkNg1187 {
    count1187 = signal(0);

    increment1187() {
      this.count1187.update((count) => count + 1);
    }
  }