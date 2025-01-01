
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1212',
    template: `<div class="benchmark-component">
    <h3>Component 1212</h3>
    <button type="button" (click)="increment1212()">
      Count {{ count1212() }}
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
  export class BenchmarkNg1212 {
    count1212 = signal(0);

    increment1212() {
      this.count1212.update((count) => count + 1);
    }
  }