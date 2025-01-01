
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1062',
    template: `<div class="benchmark-component">
    <h3>Component 1062</h3>
    <button type="button" (click)="increment1062()">
      Count {{ count1062() }}
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
  export class BenchmarkNg1062 {
    count1062 = signal(0);

    increment1062() {
      this.count1062.update((count) => count + 1);
    }
  }