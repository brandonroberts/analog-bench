
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1252',
    template: `<div class="benchmark-component">
    <h3>Component 1252</h3>
    <button type="button" (click)="increment1252()">
      Count {{ count1252() }}
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
  export class BenchmarkNg1252 {
    count1252 = signal(0);

    increment1252() {
      this.count1252.update((count) => count + 1);
    }
  }