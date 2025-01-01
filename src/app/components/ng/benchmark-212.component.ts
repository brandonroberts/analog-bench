
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-212',
    template: `<div class="benchmark-component">
    <h3>Component 212</h3>
    <button type="button" (click)="increment212()">
      Count {{ count212() }}
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
  export class BenchmarkNg212 {
    count212 = signal(0);

    increment212() {
      this.count212.update((count) => count + 1);
    }
  }