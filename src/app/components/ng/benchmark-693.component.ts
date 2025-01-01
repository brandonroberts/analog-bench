
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-693',
    template: `<div class="benchmark-component">
    <h3>Component 693</h3>
    <button type="button" (click)="increment693()">
      Count {{ count693() }}
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
  export class BenchmarkNg693 {
    count693 = signal(0);

    increment693() {
      this.count693.update((count) => count + 1);
    }
  }