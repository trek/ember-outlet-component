# Ember OutletComponent

Controllers, a hold over from Ember's earlier time, still stick around in some places. This lets you finally get rid of them.

## Installation

```
ember install ember-outlet-component
```

## Using

`OutletComponent` provides a top-level routable component that lets you end the final use of Controllers in you Ember application.

An `OutletComponent` behaves identically to a `Component` with three main differneces:

  1. An `OutletComponent` has no element (because, what would the tag name for an outlet even be?!?).
  2. Because of the previous point, an `OutletComponent` has no DOM events.
  3. Because of the point two points of ago, it has no lifecycle callebacks like `didInsertElement`

To use `OutletComponent` you'll need to make sure your application is using the resolver provided by `ember-outlet-component`:

```javascript
// your-project/resolver.js

import Resolver from "outlet-component/resolver";
export default Resolver;

```

Then, you can generate a new `OutletComponent` class with

```
ember generate outlet-component <outlet component name>
```

For example:

```
ember generate outlet-component application
```

Will genrerate a file:


```
// components/application-outlet.js
import OutletComponent from "outlet-component";

export default OutletComponent.extend();
```

## What About Query Params?
Since you still need controllers for query params use in Ember you might wonder "but what about query params?"

No worries! `OutletComponent` has you covered in two ways:

1. Simply [enable the `ember-routing-route-configured-query-params` feature](https://github.com/emberjs/ember.js/blob/bc78f0c6c2a3c05ef9f11e2de3736f4dc5568f5d/features.json#L5) (I bet you didn't even know that existed? We created it when we killed controllers.)
1. If you can't Live On The Edge(tm), don't worry: `OutletComponent` fully and faithfully implements the query parameter interface of the old `Controller` objects!

    ```
    import OutletComponent from "outlet-component";

    export default OutletComponent.extend({
      queryParams: ['category'],
      category: null
    });
    ```
Boom.

NOTE: **This addon will not work with Pods because Pods are dead**