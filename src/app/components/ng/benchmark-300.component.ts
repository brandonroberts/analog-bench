
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-300',
    template: `<div class="benchmark-component">
    <h3>Component 300</h3>
    <button type="button" (click)="increment300()">
      Count {{ count300() }}
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
  export class BenchmarkNg300 {
    count300 = signal(0);

    increment300() {
      this.count300.update((count) => count + 1);
    }
  }