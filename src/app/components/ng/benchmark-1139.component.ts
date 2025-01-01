
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1139',
    template: `<div class="benchmark-component">
    <h3>Component 1139</h3>
    <button type="button" (click)="increment1139()">
      Count {{ count1139() }}
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
  export class BenchmarkNg1139 {
    count1139 = signal(0);

    increment1139() {
      this.count1139.update((count) => count + 1);
    }
  }