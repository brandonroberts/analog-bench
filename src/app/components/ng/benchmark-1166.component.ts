
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1166',
    template: `<div class="benchmark-component">
    <h3>Component 1166</h3>
    <button type="button" (click)="increment1166()">
      Count {{ count1166() }}
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
  export class BenchmarkNg1166 {
    count1166 = signal(0);

    increment1166() {
      this.count1166.update((count) => count + 1);
    }
  }