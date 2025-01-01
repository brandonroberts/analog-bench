
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1205',
    template: `<div class="benchmark-component">
    <h3>Component 1205</h3>
    <button type="button" (click)="increment1205()">
      Count {{ count1205() }}
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
  export class BenchmarkNg1205 {
    count1205 = signal(0);

    increment1205() {
      this.count1205.update((count) => count + 1);
    }
  }