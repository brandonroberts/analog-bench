
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1072',
    template: `<div class="benchmark-component">
    <h3>Component 1072</h3>
    <button type="button" (click)="increment1072()">
      Count {{ count1072() }}
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
  export class BenchmarkNg1072 {
    count1072 = signal(0);

    increment1072() {
      this.count1072.update((count) => count + 1);
    }
  }