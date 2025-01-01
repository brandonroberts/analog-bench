
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1127',
    template: `<div class="benchmark-component">
    <h3>Component 1127</h3>
    <button type="button" (click)="increment1127()">
      Count {{ count1127() }}
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
  export class BenchmarkNg1127 {
    count1127 = signal(0);

    increment1127() {
      this.count1127.update((count) => count + 1);
    }
  }