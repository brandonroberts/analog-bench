import * as fs from 'fs';
import * as path from 'path';

// Create components directory if it doesn't exist
const componentsDir = path.join(
  process.cwd(),
  'src',
  'app',
  'components',
  'ng'
);
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Generate 100 components
for (let i = 1; i <= 100; i++) {
  const componentContent = `
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-${i}',
    template: \`<div class="benchmark-component">
    <h3>Component ${i}</h3>
    <button type="button" (click)="increment${i}()">
      Count {{ count${i}() }}
    </button>
  </div>\`,
  styles: \`
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  \`,
    standalone: true,
  })
  export class BenchmarkNg${i} {
    count${i} = signal(0);

    increment${i}() {
      this.count${i}.update((count) => count + 1);
    }
  }`;

  fs.writeFileSync(
    path.join(componentsDir, `benchmark-${i}.component.ts`),
    componentContent
  );
}

// Create a new index page that uses all components
const pageContent = `<script lang="ts">
${Array.from({ length: 100 }, (_, i) => i + 1)
  .map(
    (i) =>
      `import { BenchmarkNg${i} } from '../components/ng/benchmark-${i}.component'`
  )
  .join(';\n')};

  defineMetadata({
  imports: [
    ${Array.from({ length: 100 }, (_, i) => i + 1)
      .map((i) => `BenchmarkNg${i}`)
      .join(',\n')}
  ]
});
</script>

<template>
  <div class="benchmark-container">
    <h1>Benchmark Page</h1>
    <div class="components-grid">
      ${Array.from({ length: 100 }, (_, i) => i + 1)
        .map((i) => `<benchmark-ng-${i} />`)
        .join('\n      ')}
    </div>
  </div>
</template>

<style>
  .benchmark-container {
    padding: 2rem;
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
</style>
`;

// Create the benchmark page
const pagesDir = path.join(process.cwd(), 'src', 'app', 'pages');
fs.writeFileSync(path.join(pagesDir, 'benchmarkng.page.ag'), pageContent);

console.log('Generated 100 benchmark NG components and benchmark page');
