
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1354',
    template: `<div class="benchmark-component">
    <h3>Component 1354</h3>
    <button type="button" (click)="increment1354()">
      Count {{ count1354() }}
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
  export class BenchmarkNg1354 {
    count1354 = signal(0);

    increment1354() {
      this.count1354.update((count) => count + 1);
    }
  }