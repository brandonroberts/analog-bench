
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1365',
    template: `<div class="benchmark-component">
    <h3>Component 1365</h3>
    <button type="button" (click)="increment1365()">
      Count {{ count1365() }}
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
  export class BenchmarkNg1365 {
    count1365 = signal(0);

    increment1365() {
      this.count1365.update((count) => count + 1);
    }
  }