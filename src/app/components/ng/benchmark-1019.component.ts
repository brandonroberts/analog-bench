
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1019',
    template: `<div class="benchmark-component">
    <h3>Component 1019</h3>
    <button type="button" (click)="increment1019()">
      Count {{ count1019() }}
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
  export class BenchmarkNg1019 {
    count1019 = signal(0);

    increment1019() {
      this.count1019.update((count) => count + 1);
    }
  }