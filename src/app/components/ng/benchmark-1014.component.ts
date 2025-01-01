
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1014',
    template: `<div class="benchmark-component">
    <h3>Component 1014</h3>
    <button type="button" (click)="increment1014()">
      Count {{ count1014() }}
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
  export class BenchmarkNg1014 {
    count1014 = signal(0);

    increment1014() {
      this.count1014.update((count) => count + 1);
    }
  }