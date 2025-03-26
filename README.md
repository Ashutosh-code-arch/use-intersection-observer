# useIntersectionObserver

A lightweight and flexible React hook to observe element visibility using the Intersection Observer API.

## Installation

```sh
npm install use-intersection-observer
```

or

```sh
yarn add use-intersection-observer
```

## Usage

```tsx
import { useIntersectionObserver } from "use-intersection-observer";

export default function ExampleComponent() {
    const { elementRef, isIntersecting } = useIntersectionObserver();

    return (
        <div>
            <div style={{ height: "100vh" }}>Scroll down</div>
            <div
                ref={elementRef}
                style={{
                    height: 100,
                    background: isIntersecting ? "green" : "red",
                }}
            >
                {isIntersecting ? "Visible" : "Not Visible"}
            </div>
        </div>
    );
}
```

## API

### `useIntersectionObserver(callback?, options?)`

| Parameter  | Type                                         | Default                                                                       | Description                                          |
| ---------- | -------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| `callback` | `(entry: IntersectionObserverEntry) => void` | `undefined`                                                                   | Callback function triggered when visibility changes. |
| `options`  | `IntersectionOptions`                        | `{ threshold: 0.1, root: null, rootMargin: '0px', freezeOnceVisible: false }` | Options for customizing the observer behavior.       |

### `options` properties

| Option              | Type                   | Default | Description                                             |
| ------------------- | ---------------------- | ------- | ------------------------------------------------------- |
| `threshold`         | `number` or `number[]` | `0.1`   | Intersection threshold for triggering observer.         |
| `root`              | `Element` or `null`    | `null`  | Root element for intersection calculation.              |
| `rootMargin`        | `string`               | `'0px'` | Margin around the root element.                         |
| `freezeOnceVisible` | `boolean`              | `false` | If `true`, stops observing once the element is visible. |

## Example with Callback

```tsx
const callback = (entry) => {
    console.log("Element is visible:", entry.isIntersecting);
};

const { elementRef, isIntersecting } = useIntersectionObserver(callback, {
    threshold: 0.5,
});
```

## License

This project is licensed under the [MIT License](LICENSE).
