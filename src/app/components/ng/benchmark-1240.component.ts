
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1240',
    template: `<div class="benchmark-component">
    <h3>Component 1240</h3>
    <button type="button" (click)="increment1240()">
      Count {{ count1240() }}
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
  export class BenchmarkNg1240 {
    count1240 = signal(0);

    increment1240() {
      this.count1240.update((count) => count + 1);
    }
  }