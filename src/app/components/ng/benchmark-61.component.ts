
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-61',
    template: `<div class="benchmark-component">
    <h3>Component 61</h3>
    <button type="button" (click)="increment61()">
      Count {{ count61() }}
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
  export class BenchmarkNg61 {
    count61 = signal(0);

    increment61() {
      this.count61.update((count) => count + 1);
    }
  }