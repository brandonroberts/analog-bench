
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1264',
    template: `<div class="benchmark-component">
    <h3>Component 1264</h3>
    <button type="button" (click)="increment1264()">
      Count {{ count1264() }}
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
  export class BenchmarkNg1264 {
    count1264 = signal(0);

    increment1264() {
      this.count1264.update((count) => count + 1);
    }
  }