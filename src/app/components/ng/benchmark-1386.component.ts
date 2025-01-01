
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1386',
    template: `<div class="benchmark-component">
    <h3>Component 1386</h3>
    <button type="button" (click)="increment1386()">
      Count {{ count1386() }}
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
  export class BenchmarkNg1386 {
    count1386 = signal(0);

    increment1386() {
      this.count1386.update((count) => count + 1);
    }
  }