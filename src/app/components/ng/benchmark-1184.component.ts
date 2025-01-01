
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1184',
    template: `<div class="benchmark-component">
    <h3>Component 1184</h3>
    <button type="button" (click)="increment1184()">
      Count {{ count1184() }}
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
  export class BenchmarkNg1184 {
    count1184 = signal(0);

    increment1184() {
      this.count1184.update((count) => count + 1);
    }
  }