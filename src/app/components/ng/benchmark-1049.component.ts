
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1049',
    template: `<div class="benchmark-component">
    <h3>Component 1049</h3>
    <button type="button" (click)="increment1049()">
      Count {{ count1049() }}
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
  export class BenchmarkNg1049 {
    count1049 = signal(0);

    increment1049() {
      this.count1049.update((count) => count + 1);
    }
  }