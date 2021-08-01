/**
 *
 * @export
 * @interface PlaceCandidate
 */
export interface PlaceCandidate {
  /**
   *
   * @type {number}
   * @memberof Place
   */
  latitude: number;
  /**
   *
   * @type {number}
   * @memberof Place
   */
  longitude: number;
  /**
   *
   * @type {string}
   * @memberof Place
   */
  name: string;
}
/**
 *
 * @export
 * @interface Place
 */
export interface Place extends PlaceCandidate {
  /**
   *
   * @type {string}
   * @memberof Place
   */
  UUID: string;

  /**
   *
   * @type {string}
   * @memberof Place
   */
  image?: string;
}

/**
 *
 * @export
 * @interface Places
 */
export interface Places extends Array<Place> {}
