export enum LoadableStatus {
  Initial = 'INITIAL',
  Loading = 'LOADING',
  Loaded = 'LOADED',
  Creating = 'CREATING',
  Created = 'CREATED',
  Updating = 'UPDATING',
  Updated = 'UPDATED',
  Deleting = 'DELETING',
  Deleted = 'DELETED',
  Failed = 'FAILED',
}

/**
 * A generic class representing the state of a Loadable resource.
 * @template D - The type of the data.
 * @template E - The type of the error that can occur.
 */
export class Loadable<D, E = Error> {
  constructor(
    data: D | null = null,
    status: LoadableStatus = LoadableStatus.Initial,
    error: E | null = null
  ) {
    this._data = data;
    this._status = status;
    this._error = error;
  }

  /**
   * @returns `true` if the Loadable resource is in the Initial status,
   * `false` otherwise.
   */
  get isInitial(): boolean {
    return this._status === LoadableStatus.Initial;
  }

  /**
   * @returns `true` if the Loadable resource is in the Loading status,
   * `false` otherwise.
   */
  get isLoading(): boolean {
    return this._status === LoadableStatus.Loading;
  }

  /**
   * @returns `true` if the Loadable resource is in the Loaded status,
   * `false` otherwise.
   */
  get isLoaded(): boolean {
    return this._status === LoadableStatus.Loaded;
  }

  /**
   * @returns `true` if the Loadable resource is in the Creating status,
   * `false` otherwise.
   */
  get isCreating(): boolean {
    return this._status === LoadableStatus.Creating;
  }

  /**
   * @returns `true` if the Loadable resource is in the Created status,
   * `false` otherwise.
   */
  get isCreated(): boolean {
    return this._status === LoadableStatus.Created;
  }

  /**
   * @returns `true` if the Loadable resource is in the Updating status,
   * `false` otherwise.
   */
  get isUpdating(): boolean {
    return this._status === LoadableStatus.Updating;
  }

  /**
   * @returns `true` if the Loadable resource is in the Updated status,
   * `false` otherwise.
   */
  get isUpdated(): boolean {
    return this._status === LoadableStatus.Updated;
  }

  /**
   * @returns `true` if the Loadable resource is in the Deleting status,
   * `false` otherwise.
   */
  get isDeleting(): boolean {
    return this._status === LoadableStatus.Deleting;
  }

  /**
   * @returns `true` if the Loadable resource is in the Deleted status,
   * `false` otherwise.
   */
  get isDeleted(): boolean {
    return this._status === LoadableStatus.Deleted;
  }

  /**
   * @returns `true` if the Loadable resource is in the Failed status,
   * `false` otherwise.
   */
  get isFailed(): boolean {
    return this._status === LoadableStatus.Failed;
  }

  /**
   * @returns `true` if the Loadable resource is in the Loading, Creating, Updating or Deleting status,
   * `false` otherwise.
   */
  get isInProgress(): boolean {
    return (
      this.isLoading || this.isCreating || this.isUpdating || this.isDeleting
    );
  }

  /**
   * @returns `true` if the Loadable resource is in the Initial or Loaded status,
   * `false` otherwise.
   */
  get isInitialOrLoaded(): boolean {
    return this.isInitial || this.isLoaded;
  }

  /**
   * @returns `true` if the Loadable resource is in the Created or Updated status,
   * `false` otherwise.
   */
  get isPersisted(): boolean {
    return this.isCreated || this.isUpdated;
  }

  /**
   * @returns `true` if the Loadable resource is in the Loaded, Created, Updated or Deleted status,
   * `false` otherwise.
   */
  get isCompleted(): boolean {
    return this.isLoaded || this.isCreated || this.isUpdated || this.isDeleted;
  }

  private _data: D | null;

  /**
   * @returns The current data, or `null` if no data has been loaded yet.
   */
  get data(): D | null {
    return this._data;
  }

  private _status: LoadableStatus;

  /**
   * @returns The current status of the Loadable resource.
   */
  get status(): LoadableStatus {
    return this._status;
  }

  private _error: E | null;

  /**
   * @returns The error that occurred while working with data
   * or `null` if no error occurred.
   */
  get error(): E | null {
    return this._error;
  }

  /**
   * @param data - Data.
   * @returns A new `Loadable` instance in the Initial status with optional initial data.
   */
  toInitial(data: D | null = null): Loadable<D, E> {
    return new Loadable<D, E>(data, LoadableStatus.Initial);
  }

  /**
   * Sets the Loadable resource to the Initial status with optional initial data.
   * @param data - Data.
   */
  setInitial(data: D | null = null): void {
    this.setStatus(LoadableStatus.Initial, data);
  }

  /**
   * @returns A new `Loadable` instance in the Loading status.
   */
  toLoading(): Loadable<D, E> {
    return new Loadable<D, E>(this._data, LoadableStatus.Loading);
  }

  /**
   * Sets the Loadable resource to the Loading status with data,
   * sets the error to 'null'.
   */
  setLoading(): void {
    this.setStatus(LoadableStatus.Loading, this.data);
  }

  /**
   * @returns A new `Loadable` instance in the Loaded status with data.
   */
  toLoaded(data: D): Loadable<D, E> {
    return new Loadable<D, E>(data, LoadableStatus.Loaded);
  }

  /**
   * Sets the Loadable resource to the Loaded status with data,
   * sets the error to 'null'.
   * @param data - Data.
   */
  setLoaded(data: D): void {
    this.setStatus(LoadableStatus.Loaded, data);
  }

  /**
   * @returns A new `Loadable` instance in the Creating status with data,
   */
  toCreating(): Loadable<D, E> {
    return new Loadable<D, E>(this._data, LoadableStatus.Creating);
  }

  /**
   * Sets the Loadable resource to the Creating status,
   * sets the error to 'null'.
   */
  setCreating(): void {
    this.setStatus(LoadableStatus.Creating, this._data);
  }

  /**
   * @returns A new `Loadable` instance in the Created status with data.
   */
  toCreated(data: D): Loadable<D, E> {
    return new Loadable<D, E>(data, LoadableStatus.Created);
  }

  /**
   * Sets the Loadable resource to the Created status,
   * sets the error to 'null'.
   */
  setCreated(data: D): void {
    this.setStatus(LoadableStatus.Created, data);
  }

  /**
   * @returns A new `Loadable` instance in the Updating status.
   */
  toUpdating(): Loadable<D, E> {
    return new Loadable<D, E>(this._data, LoadableStatus.Updating);
  }

  /**
   * Sets the Loadable resource to the Updating status,
   * sets the error to 'null'.
   */
  setUpdating(): void {
    this.setStatus(LoadableStatus.Updating, this._data);
  }

  /**
   * @returns A new `Loadable` instance in the Updated status with data.
   */
  toUpdated(data: D): Loadable<D, E> {
    return new Loadable<D, E>(data, LoadableStatus.Updated);
  }

  /**
   * Sets the Loadable resource to the Updated status,
   * sets the error to 'null'.
   */
  setUpdated(data: D): void {
    this.setStatus(LoadableStatus.Updated, data);
  }

  /**
   * @returns A new `Loadable` instance in the Deleting status.
   */
  toDeleting(): Loadable<D, E> {
    return new Loadable<D, E>(this._data, LoadableStatus.Deleting);
  }

  /**
   * Sets the Loadable resource to the Deleting status,
   * sets the error to 'null'.
   */
  setDeleting(): void {
    this.setStatus(LoadableStatus.Deleting, this._data);
  }

  /**
   * @returns A new `Loadable` instance in the Deleted status.
   */
  toDeleted(): Loadable<D, E> {
    return new Loadable<D, E>(null, LoadableStatus.Deleted);
  }

  /**
   * Sets the Loadable resource to the Deleted status,
   * sets the error to 'null'.
   */
  setDeleted(): void {
    this.setStatus(LoadableStatus.Deleted);
  }

  /**
   * @returns A new `Loadable` instance in the Failed status with an error.
   */
  toFailed(error: E): Loadable<D, E> {
    return new Loadable<D, E>(this._data, LoadableStatus.Failed, error);
  }

  /**
   * Sets the Loadable resource to the Failed status,
   * sets the error.
   */
  setFailed(error: E): void {
    this.setStatus(LoadableStatus.Failed, this._data, error);
  }

  /**
   * Sets the Loadable resource to the provided status,
   */
  private setStatus(
    status: LoadableStatus,
    data: D | null = null,
    error: E | null = null
  ): void {
    this._status = status;
    this._data = data;
    this._error = error;
  }
}
