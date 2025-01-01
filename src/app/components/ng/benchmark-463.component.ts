
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-463',
    template: `<div class="benchmark-component">
    <h3>Component 463</h3>
    <button type="button" (click)="increment463()">
      Count {{ count463() }}
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
  export class BenchmarkNg463 {
    count463 = signal(0);

    increment463() {
      this.count463.update((count) => count + 1);
    }
  }