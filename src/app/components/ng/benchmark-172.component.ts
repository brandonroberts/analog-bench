
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-172',
    template: `<div class="benchmark-component">
    <h3>Component 172</h3>
    <button type="button" (click)="increment172()">
      Count {{ count172() }}
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
  export class BenchmarkNg172 {
    count172 = signal(0);

    increment172() {
      this.count172.update((count) => count + 1);
    }
  }