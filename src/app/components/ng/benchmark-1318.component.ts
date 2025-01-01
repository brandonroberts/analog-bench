
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1318',
    template: `<div class="benchmark-component">
    <h3>Component 1318</h3>
    <button type="button" (click)="increment1318()">
      Count {{ count1318() }}
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
  export class BenchmarkNg1318 {
    count1318 = signal(0);

    increment1318() {
      this.count1318.update((count) => count + 1);
    }
  }