
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-777',
    template: `<div class="benchmark-component">
    <h3>Component 777</h3>
    <button type="button" (click)="increment777()">
      Count {{ count777() }}
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
  export class BenchmarkNg777 {
    count777 = signal(0);

    increment777() {
      this.count777.update((count) => count + 1);
    }
  }