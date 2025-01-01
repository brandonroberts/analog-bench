
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1172',
    template: `<div class="benchmark-component">
    <h3>Component 1172</h3>
    <button type="button" (click)="increment1172()">
      Count {{ count1172() }}
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
  export class BenchmarkNg1172 {
    count1172 = signal(0);

    increment1172() {
      this.count1172.update((count) => count + 1);
    }
  }