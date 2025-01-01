
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1305',
    template: `<div class="benchmark-component">
    <h3>Component 1305</h3>
    <button type="button" (click)="increment1305()">
      Count {{ count1305() }}
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
  export class BenchmarkNg1305 {
    count1305 = signal(0);

    increment1305() {
      this.count1305.update((count) => count + 1);
    }
  }