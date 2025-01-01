
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-756',
    template: `<div class="benchmark-component">
    <h3>Component 756</h3>
    <button type="button" (click)="increment756()">
      Count {{ count756() }}
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
  export class BenchmarkNg756 {
    count756 = signal(0);

    increment756() {
      this.count756.update((count) => count + 1);
    }
  }