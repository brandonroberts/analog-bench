
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-40',
    template: `<div class="benchmark-component">
    <h3>Component 40</h3>
    <button type="button" (click)="increment40()">
      Count {{ count40() }}
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
  export class BenchmarkNg40 {
    count40 = signal(0);

    increment40() {
      this.count40.update((count) => count + 1);
    }
  }