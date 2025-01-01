
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-813',
    template: `<div class="benchmark-component">
    <h3>Component 813</h3>
    <button type="button" (click)="increment813()">
      Count {{ count813() }}
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
  export class BenchmarkNg813 {
    count813 = signal(0);

    increment813() {
      this.count813.update((count) => count + 1);
    }
  }