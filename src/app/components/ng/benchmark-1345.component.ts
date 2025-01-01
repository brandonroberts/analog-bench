
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1345',
    template: `<div class="benchmark-component">
    <h3>Component 1345</h3>
    <button type="button" (click)="increment1345()">
      Count {{ count1345() }}
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
  export class BenchmarkNg1345 {
    count1345 = signal(0);

    increment1345() {
      this.count1345.update((count) => count + 1);
    }
  }