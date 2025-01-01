
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-976',
    template: `<div class="benchmark-component">
    <h3>Component 976</h3>
    <button type="button" (click)="increment976()">
      Count {{ count976() }}
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
  export class BenchmarkNg976 {
    count976 = signal(0);

    increment976() {
      this.count976.update((count) => count + 1);
    }
  }