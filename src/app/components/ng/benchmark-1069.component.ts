
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1069',
    template: `<div class="benchmark-component">
    <h3>Component 1069</h3>
    <button type="button" (click)="increment1069()">
      Count {{ count1069() }}
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
  export class BenchmarkNg1069 {
    count1069 = signal(0);

    increment1069() {
      this.count1069.update((count) => count + 1);
    }
  }