
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1342',
    template: `<div class="benchmark-component">
    <h3>Component 1342</h3>
    <button type="button" (click)="increment1342()">
      Count {{ count1342() }}
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
  export class BenchmarkNg1342 {
    count1342 = signal(0);

    increment1342() {
      this.count1342.update((count) => count + 1);
    }
  }