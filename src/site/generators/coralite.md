---
title: Coralite
repo: tjdav/coralite
homepage: https://coralite.dev
language:
  - JavaScript
  - TypeScript
license:
  - MPL-2.0
templates:
  - HTML
  - Web Components
description: An Isomorphic Web Component Framework for fast, interactive SPAs, dynamic websites, and static sites.
---
Build for the Web, With the Web!

Coralite is a powerful **Isomorphic Web Component Framework** designed to build fast, interactive single-page applications (SPAs), dynamic websites, and static sites. It seamlessly blends the initial load speed of Server-Side Rendering (SSR) with robust, high-performance client-side hydration, giving you total flexibility over your rendering strategy using standard Web Components.

Coralite stands out by actively fixing the most frustrating pain points of modern web development:

* **True Native Web Components**: Abandon the verbose `class extends HTMLElement` syntax. Coralite uses a clean, ergonomic `defineComponent` flat-options API (`attributes`, `server`, `getters`, `client`) that outputs true native Custom Elements.
* **Isomorphism Built-In**: Fetch database or API records in the `server()` block during SSR. Coralite automatically serializes that data, hydrates it seamlessly into a unified reactive state on the client, and safely strips the `server()` code entirely from your browser bundle.
* **Opt-Out Hydration**: For purely static sections, simply append the `no-hydration` attribute to your HTML tag. Coralite will render it on the server but skip client-side hydration completely, keeping your JavaScript bundle incredibly lean.
* **The "Smart State, Dumb Template" Paradigm**: Templates are strictly declarative—no logic loops, inline expressions, or dot-notation allowed. All UI logic resides in pure, synchronous JavaScript `getters` which map cleanly to native HTML attributes.
* **Scoped CSS without Shadow DOM**: Coralite completely bypasses Shadow DOM limitations by using compiler-generated instance identifiers to perfectly scope your CSS in the Light DOM.
* **O(1) Microtask Reactivity (No Virtual DOM)**: Mutate state in the `client()` controller block, and Coralite automatically schedules surgical DOM updates in the next microtask queue with O(1) precision via a compiler-generated hydration map.
* **Async Race-Condition Immunity**: Coralite’s reactive engine handles asynchronous data with built-in version locks, ensuring your DOM never renders stale data from out-of-order Promise resolutions.