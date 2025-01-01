
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1196',
    template: `<div class="benchmark-component">
    <h3>Component 1196</h3>
    <button type="button" (click)="increment1196()">
      Count {{ count1196() }}
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
  export class BenchmarkNg1196 {
    count1196 = signal(0);

    increment1196() {
      this.count1196.update((count) => count + 1);
    }
  }