
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-73',
    template: `<div class="benchmark-component">
    <h3>Component 73</h3>
    <button type="button" (click)="increment73()">
      Count {{ count73() }}
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
  export class BenchmarkNg73 {
    count73 = signal(0);

    increment73() {
      this.count73.update((count) => count + 1);
    }
  }