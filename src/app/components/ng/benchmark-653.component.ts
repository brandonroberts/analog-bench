
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-653',
    template: `<div class="benchmark-component">
    <h3>Component 653</h3>
    <button type="button" (click)="increment653()">
      Count {{ count653() }}
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
  export class BenchmarkNg653 {
    count653 = signal(0);

    increment653() {
      this.count653.update((count) => count + 1);
    }
  }