
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1167',
    template: `<div class="benchmark-component">
    <h3>Component 1167</h3>
    <button type="button" (click)="increment1167()">
      Count {{ count1167() }}
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
  export class BenchmarkNg1167 {
    count1167 = signal(0);

    increment1167() {
      this.count1167.update((count) => count + 1);
    }
  }