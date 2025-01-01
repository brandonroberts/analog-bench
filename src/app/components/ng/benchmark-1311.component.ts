
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1311',
    template: `<div class="benchmark-component">
    <h3>Component 1311</h3>
    <button type="button" (click)="increment1311()">
      Count {{ count1311() }}
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
  export class BenchmarkNg1311 {
    count1311 = signal(0);

    increment1311() {
      this.count1311.update((count) => count + 1);
    }
  }