
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1011',
    template: `<div class="benchmark-component">
    <h3>Component 1011</h3>
    <button type="button" (click)="increment1011()">
      Count {{ count1011() }}
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
  export class BenchmarkNg1011 {
    count1011 = signal(0);

    increment1011() {
      this.count1011.update((count) => count + 1);
    }
  }