
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-935',
    template: `<div class="benchmark-component">
    <h3>Component 935</h3>
    <button type="button" (click)="increment935()">
      Count {{ count935() }}
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
  export class BenchmarkNg935 {
    count935 = signal(0);

    increment935() {
      this.count935.update((count) => count + 1);
    }
  }