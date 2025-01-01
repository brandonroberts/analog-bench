
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1006',
    template: `<div class="benchmark-component">
    <h3>Component 1006</h3>
    <button type="button" (click)="increment1006()">
      Count {{ count1006() }}
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
  export class BenchmarkNg1006 {
    count1006 = signal(0);

    increment1006() {
      this.count1006.update((count) => count + 1);
    }
  }