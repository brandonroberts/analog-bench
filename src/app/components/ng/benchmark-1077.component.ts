
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1077',
    template: `<div class="benchmark-component">
    <h3>Component 1077</h3>
    <button type="button" (click)="increment1077()">
      Count {{ count1077() }}
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
  export class BenchmarkNg1077 {
    count1077 = signal(0);

    increment1077() {
      this.count1077.update((count) => count + 1);
    }
  }