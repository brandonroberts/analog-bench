
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1307',
    template: `<div class="benchmark-component">
    <h3>Component 1307</h3>
    <button type="button" (click)="increment1307()">
      Count {{ count1307() }}
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
  export class BenchmarkNg1307 {
    count1307 = signal(0);

    increment1307() {
      this.count1307.update((count) => count + 1);
    }
  }