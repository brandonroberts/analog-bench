
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1136',
    template: `<div class="benchmark-component">
    <h3>Component 1136</h3>
    <button type="button" (click)="increment1136()">
      Count {{ count1136() }}
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
  export class BenchmarkNg1136 {
    count1136 = signal(0);

    increment1136() {
      this.count1136.update((count) => count + 1);
    }
  }