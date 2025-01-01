
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1208',
    template: `<div class="benchmark-component">
    <h3>Component 1208</h3>
    <button type="button" (click)="increment1208()">
      Count {{ count1208() }}
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
  export class BenchmarkNg1208 {
    count1208 = signal(0);

    increment1208() {
      this.count1208.update((count) => count + 1);
    }
  }