
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1197',
    template: `<div class="benchmark-component">
    <h3>Component 1197</h3>
    <button type="button" (click)="increment1197()">
      Count {{ count1197() }}
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
  export class BenchmarkNg1197 {
    count1197 = signal(0);

    increment1197() {
      this.count1197.update((count) => count + 1);
    }
  }