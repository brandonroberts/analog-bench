
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1339',
    template: `<div class="benchmark-component">
    <h3>Component 1339</h3>
    <button type="button" (click)="increment1339()">
      Count {{ count1339() }}
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
  export class BenchmarkNg1339 {
    count1339 = signal(0);

    increment1339() {
      this.count1339.update((count) => count + 1);
    }
  }