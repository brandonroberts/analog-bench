
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-829',
    template: `<div class="benchmark-component">
    <h3>Component 829</h3>
    <button type="button" (click)="increment829()">
      Count {{ count829() }}
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
  export class BenchmarkNg829 {
    count829 = signal(0);

    increment829() {
      this.count829.update((count) => count + 1);
    }
  }