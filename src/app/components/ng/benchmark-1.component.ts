
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1',
    template: `<div class="benchmark-component">
    <h3>Component 1</h3>
    <button type="button" (click)="increment1()">
      Count {{ count1() }}
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
  export class BenchmarkNg1 {
    count1 = signal(0);

    increment1() {
      this.count1.update((count) => count + 1);
    }
  }