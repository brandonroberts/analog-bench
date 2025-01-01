
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1190',
    template: `<div class="benchmark-component">
    <h3>Component 1190</h3>
    <button type="button" (click)="increment1190()">
      Count {{ count1190() }}
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
  export class BenchmarkNg1190 {
    count1190 = signal(0);

    increment1190() {
      this.count1190.update((count) => count + 1);
    }
  }