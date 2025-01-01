
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1032',
    template: `<div class="benchmark-component">
    <h3>Component 1032</h3>
    <button type="button" (click)="increment1032()">
      Count {{ count1032() }}
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
  export class BenchmarkNg1032 {
    count1032 = signal(0);

    increment1032() {
      this.count1032.update((count) => count + 1);
    }
  }