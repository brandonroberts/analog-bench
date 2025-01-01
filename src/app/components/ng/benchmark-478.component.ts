
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-478',
    template: `<div class="benchmark-component">
    <h3>Component 478</h3>
    <button type="button" (click)="increment478()">
      Count {{ count478() }}
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
  export class BenchmarkNg478 {
    count478 = signal(0);

    increment478() {
      this.count478.update((count) => count + 1);
    }
  }