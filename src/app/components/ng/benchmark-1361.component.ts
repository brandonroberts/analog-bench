
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1361',
    template: `<div class="benchmark-component">
    <h3>Component 1361</h3>
    <button type="button" (click)="increment1361()">
      Count {{ count1361() }}
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
  export class BenchmarkNg1361 {
    count1361 = signal(0);

    increment1361() {
      this.count1361.update((count) => count + 1);
    }
  }