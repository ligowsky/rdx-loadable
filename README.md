# Description 

`Loadable` is a class that represents the state of a loadable resource, providing a generic 
solution for managing the state of data that is loaded asynchronously. 
With `Loadable`, you can easily keep track of the loading status of a resource, whether it is 
in the process of being loaded, created, updated, or deleted. The class provides a set of 
methods that can be used to initialize, update, and retrieve data and status, and also includes 
methods for creating new instances of the `Loadable` class in specific states. 
`Loadable` is good for use in front-end applications that need to manage asynchronous data 
loading and resource creation, update, delete operations.

# Usage 

### Installation

```bash
npm install rdx-loadable
```

### NGRX

```typescript
export type FooState = {
  foo: Loadable<Foo>;
};

const initialState: FooState = {
  foo: new Loadable<Foo>(),
};

export const fooReducer = createReducer(
  initialState,

  on(
    FooActions.fooLoad,
    (state): FooState => ({
      ...state,
      foo: state.foo.toLoading(),
    })
  ),

  on(
    FooActions.fooLoadSuccess,
    (state, action): FooState => ({
      ...state,
      foo: state.foo.toLoaded(action.foo),
    })
  ),

  on(
    FooActions.fooLoadFailure,
    (state, action): FooState => ({
      ...state,
      foo: state.foo.toFailed(action.error),
    })
  )
);
```

# Documentation

### `LoadableStatus` enum
An enum representing the status of a Loadable resource.
* `Initial`
* `Loading`
* `Loaded`
* `Creating`
* `Created`
* `Updating`
* `Updated`
* `Deleting`
* `Deleted`
* `Failed`

### `Loadable<D, E = Error>`
A generic class representing the state of a Loadable resource.
* `D` — The type of data.
* `E` — The type of the error that can occur.

#### `data`
Current data of type `D` or `null` if no data has been loaded yet.

#### `status`
Current status of the Loadable resource.

#### `error`
The error of type `E` that occurred while working with data or `null` if no error occurred.

#### `isInitial`
* **Returns:** `true` — if the Loadable resource is in the Initial status, `false` otherwise.

#### `isLoading`
* **Returns:** `true` — if the Loadable resource is in the Loading status, `false` otherwise.

#### `isLoaded`
* **Returns:** `true` — if the Loadable resource is in the Loaded status, `false` otherwise.

#### `isCreating`
* **Returns:** `true` — if the Loadable resource is in the Creating status, `false` otherwise.

#### `isCreated`
* **Returns:** `true` — if the Loadable resource is in the Created status, `false` otherwise.

#### `isUpdating`
* **Returns:** `true` — if the Loadable resource is in the Updating status, `false` otherwise.

#### `isUpdated`
* **Returns:** `true` — if the Loadable resource is in the Updated status, `false` otherwise.

#### `isDeleting`
* **Returns:** `true` — if the Loadable resource is in the Deleting status, `false` otherwise.

#### `isDeleted`
* **Returns:** `true` — if the Loadable resource is in the Deleted status, `false` otherwise.

#### `isFailed`
* **Returns:** `true` — if the Loadable resource is in the Failed status, `false` otherwise.

#### `isInProgress`
* **Returns:** `true` — if the Loadable resource is in the Loading, Creating, Updating or Deleting status, `false` otherwise.

#### `isInitialOrLoaded`
* **Returns:** `true` — if the Loadable resource is in the Initial or Loaded status, `false` otherwise.

#### `isPersisted`
* **Returns:** `true` — if the Loadable resource is in the Created or Updated status, `false` otherwise.

#### `isCompleted`
* **Returns:** `true` — if the Loadable resource is in the Loaded, Created, Updated or Deleted status, `false` otherwise.

#### `toInitial(data: D | null = null): Loadable<D, E>`
* **Parameters:** `data` — Data.
* **Returns:** new `Loadable` instance in the Initial status with optional initial data.

#### `setInitial(data: D | null = null): void`
Sets the `Loadable` to the Initial status with optional initial data.
* **Parameters:** `data` — Data.

#### `toLoading(): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Loading status.

#### `setLoading(): void`
Sets the `Loadable` to the Loading status with data, sets the error to `null`.

#### `toLoaded(data: D): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Loaded status with data.

#### `setLoaded(data: D): void`
Sets the `Loadable` to the Loaded status with data, sets the error to `null`.
* **Parameters:** `data` — Data.

#### `toCreating(): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Creating status with data,

#### `setCreating(): void`
Sets the `Loadable` to the Creating status, sets the error to `null`.

#### `toCreated(data: D): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Created status with data.

#### `setCreated(data: D): void`
Sets the `Loadable` to the Created status, sets the error to `null`.

#### `toUpdating(): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Updating status.

#### `setUpdating(): void`
Sets the `Loadable` to the Updating status, sets the error to `null`.

#### `toUpdated(data: D): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Updated status with data.

#### `setUpdated(data: D): void`
Sets the `Loadable` to the Updated status, sets the error to `null`.

#### `toDeleting(): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Deleting status.

#### `setDeleting(): void`
Sets the `Loadable` to the Deleting status, sets the error to `null`.

#### `toDeleted(): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Deleted status.

#### `setDeleted(): void`
Sets the `Loadable` to the Deleted status, sets the error to `null`.

#### `toFailed(error: E): Loadable<D, E>`
* **Returns:** new `Loadable` instance in the Failed status with an error.

#### `setFailed(error: E): void`
Sets the `Loadable` to the Failed status, sets the error.
