
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-882',
    template: `<div class="benchmark-component">
    <h3>Component 882</h3>
    <button type="button" (click)="increment882()">
      Count {{ count882() }}
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
  export class BenchmarkNg882 {
    count882 = signal(0);

    increment882() {
      this.count882.update((count) => count + 1);
    }
  }