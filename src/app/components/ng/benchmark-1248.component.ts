
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1248',
    template: `<div class="benchmark-component">
    <h3>Component 1248</h3>
    <button type="button" (click)="increment1248()">
      Count {{ count1248() }}
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
  export class BenchmarkNg1248 {
    count1248 = signal(0);

    increment1248() {
      this.count1248.update((count) => count + 1);
    }
  }