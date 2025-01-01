
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-69',
    template: `<div class="benchmark-component">
    <h3>Component 69</h3>
    <button type="button" (click)="increment69()">
      Count {{ count69() }}
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
  export class BenchmarkNg69 {
    count69 = signal(0);

    increment69() {
      this.count69.update((count) => count + 1);
    }
  }