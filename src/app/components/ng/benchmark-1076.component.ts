
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1076',
    template: `<div class="benchmark-component">
    <h3>Component 1076</h3>
    <button type="button" (click)="increment1076()">
      Count {{ count1076() }}
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
  export class BenchmarkNg1076 {
    count1076 = signal(0);

    increment1076() {
      this.count1076.update((count) => count + 1);
    }
  }