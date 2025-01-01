
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1209',
    template: `<div class="benchmark-component">
    <h3>Component 1209</h3>
    <button type="button" (click)="increment1209()">
      Count {{ count1209() }}
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
  export class BenchmarkNg1209 {
    count1209 = signal(0);

    increment1209() {
      this.count1209.update((count) => count + 1);
    }
  }