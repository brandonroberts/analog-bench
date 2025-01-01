
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1289',
    template: `<div class="benchmark-component">
    <h3>Component 1289</h3>
    <button type="button" (click)="increment1289()">
      Count {{ count1289() }}
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
  export class BenchmarkNg1289 {
    count1289 = signal(0);

    increment1289() {
      this.count1289.update((count) => count + 1);
    }
  }