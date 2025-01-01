
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1038',
    template: `<div class="benchmark-component">
    <h3>Component 1038</h3>
    <button type="button" (click)="increment1038()">
      Count {{ count1038() }}
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
  export class BenchmarkNg1038 {
    count1038 = signal(0);

    increment1038() {
      this.count1038.update((count) => count + 1);
    }
  }