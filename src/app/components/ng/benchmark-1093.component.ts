
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1093',
    template: `<div class="benchmark-component">
    <h3>Component 1093</h3>
    <button type="button" (click)="increment1093()">
      Count {{ count1093() }}
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
  export class BenchmarkNg1093 {
    count1093 = signal(0);

    increment1093() {
      this.count1093.update((count) => count + 1);
    }
  }