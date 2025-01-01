
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1164',
    template: `<div class="benchmark-component">
    <h3>Component 1164</h3>
    <button type="button" (click)="increment1164()">
      Count {{ count1164() }}
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
  export class BenchmarkNg1164 {
    count1164 = signal(0);

    increment1164() {
      this.count1164.update((count) => count + 1);
    }
  }