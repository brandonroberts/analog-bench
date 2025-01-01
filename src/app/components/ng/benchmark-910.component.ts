
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-910',
    template: `<div class="benchmark-component">
    <h3>Component 910</h3>
    <button type="button" (click)="increment910()">
      Count {{ count910() }}
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
  export class BenchmarkNg910 {
    count910 = signal(0);

    increment910() {
      this.count910.update((count) => count + 1);
    }
  }