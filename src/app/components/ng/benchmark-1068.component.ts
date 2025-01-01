
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1068',
    template: `<div class="benchmark-component">
    <h3>Component 1068</h3>
    <button type="button" (click)="increment1068()">
      Count {{ count1068() }}
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
  export class BenchmarkNg1068 {
    count1068 = signal(0);

    increment1068() {
      this.count1068.update((count) => count + 1);
    }
  }