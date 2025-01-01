
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1140',
    template: `<div class="benchmark-component">
    <h3>Component 1140</h3>
    <button type="button" (click)="increment1140()">
      Count {{ count1140() }}
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
  export class BenchmarkNg1140 {
    count1140 = signal(0);

    increment1140() {
      this.count1140.update((count) => count + 1);
    }
  }