/**
 * Represents the days of the week
 */
export enum DayOfWeek {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

/**
 * Represents the possible states of a sweep operation.
 */
export enum SweepStatus {
  /**
   * The sweep has been created but not yet started.
   */
  INITIATED = 'initiated',

  /**
   * The sweep is currently in progress.
   */
  RUNNING = 'running',

  /**
   * The sweep has successfully completed all operations.
   */
  SUCCESS = 'success',

  /**
   * The sweep encountered an error and failed to complete.
   */
  FAILED = 'failed',
}

/**
 * Represents the possible locations where a product's best price can be found.
 */
export enum BestPriceLocation {
  /**
   * The best price location is not determined or unknown.
   */
  UNKNOWN = 'unknown',

  /**
   * The best price is available in-store only.
   */
  INSTORE = 'instore',

  /**
   * The best price is available online only.
   */
  ONLINE = 'online',

  /**
   * The best price is available both in-store and online.
   */
  BOTH = 'both',
}
