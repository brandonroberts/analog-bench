
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1391',
    template: `<div class="benchmark-component">
    <h3>Component 1391</h3>
    <button type="button" (click)="increment1391()">
      Count {{ count1391() }}
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
  export class BenchmarkNg1391 {
    count1391 = signal(0);

    increment1391() {
      this.count1391.update((count) => count + 1);
    }
  }