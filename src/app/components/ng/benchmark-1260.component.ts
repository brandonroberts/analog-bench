
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1260',
    template: `<div class="benchmark-component">
    <h3>Component 1260</h3>
    <button type="button" (click)="increment1260()">
      Count {{ count1260() }}
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
  export class BenchmarkNg1260 {
    count1260 = signal(0);

    increment1260() {
      this.count1260.update((count) => count + 1);
    }
  }