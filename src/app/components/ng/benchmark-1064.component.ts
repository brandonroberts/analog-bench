
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1064',
    template: `<div class="benchmark-component">
    <h3>Component 1064</h3>
    <button type="button" (click)="increment1064()">
      Count {{ count1064() }}
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
  export class BenchmarkNg1064 {
    count1064 = signal(0);

    increment1064() {
      this.count1064.update((count) => count + 1);
    }
  }