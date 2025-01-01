
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1060',
    template: `<div class="benchmark-component">
    <h3>Component 1060</h3>
    <button type="button" (click)="increment1060()">
      Count {{ count1060() }}
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
  export class BenchmarkNg1060 {
    count1060 = signal(0);

    increment1060() {
      this.count1060.update((count) => count + 1);
    }
  }