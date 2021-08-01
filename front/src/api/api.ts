// tslint:disable
/**
 * Simple Map Marker
 * This is a sample server to store markers on the map
 *
 * OpenAPI spec version: 1.0.0
 * Contact: praneethmendu@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as url from "url";
import { Configuration } from "./configuration";
import { Place, Places, PlaceCandidate } from "../model/place";
const portableFetch = require("portable-fetch");
const BASE_PATH = "http://localhost:3000/api".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
  (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
  url: string;
  options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  constructor(
    protected configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected fetch: FetchAPI = portableFetch
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
  }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name = "RequiredError";
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

/**
 * PlaceApi - fetch parameter creator
 * @export
 */
export const PlaceApiFetchParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Add a new place
     * @param {Place} body place object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addPlace(body: PlaceCandidate, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling addPlace."
        );
      }
      const localVarPath = `/place`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "POST" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      localVarUrlObj.search = null;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );
      const needsSerialization =
        ("Place" as any) !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || "";

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Deletes a place
     * @param {string} uuid place id to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePlace(uuid: string, options: any = {}): FetchArgs {
      // verify required parameter 'uuid' is not null or undefined
      if (uuid === null || uuid === undefined) {
        throw new RequiredError(
          "uuid",
          "Required parameter uuid was null or undefined when calling deletePlace."
        );
      }
      const localVarPath = `/place/{uuid}`.replace(
        `{${"uuid"}}`,
        encodeURIComponent(String(uuid))
      );
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign(
        { method: "DELETE" },
        options
      );
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      localVarUrlObj.search = null;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns all places
     * @summary get all places
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllPlaces(options: any = {}): FetchArgs {
      const localVarPath = `/places`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      localVarUrlObj.search = null;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns a single place
     * @summary Find place by ID
     * @param {string} uuid ID of place to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlaceById(uuid: string, options: any = {}): FetchArgs {
      // verify required parameter 'uuid' is not null or undefined
      if (uuid === null || uuid === undefined) {
        throw new RequiredError(
          "uuid",
          "Required parameter uuid was null or undefined when calling getPlaceById."
        );
      }
      const localVarPath = `/place/{uuid}`.replace(
        `{${"uuid"}}`,
        encodeURIComponent(String(uuid))
      );
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "GET" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      localVarUrlObj.search = null;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update an existing place
     * @param {PlaceCandidate} body place object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePlace(body: Place, options: any = {}): FetchArgs {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling updatePlace."
        );
      }
      const localVarPath = `/place`;
      const localVarUrlObj = url.parse(localVarPath, true);
      const localVarRequestOptions = Object.assign({ method: "PUT" }, options);
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter,
        options.query
      );
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      localVarUrlObj.search = null;
      localVarRequestOptions.headers = Object.assign(
        {},
        localVarHeaderParameter,
        options.headers
      );
      const needsSerialization =
        ("Place" as any) !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.body = needsSerialization
        ? JSON.stringify(body || {})
        : body || "";

      return {
        url: url.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * PlaceApi - functional programming interface
 * @export
 */
export const PlaceApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Add a new place
     * @param {PlaceCandidate} body place object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addPlace(
      body: PlaceCandidate,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<string> {
      const localVarFetchArgs = PlaceApiFetchParamCreator(
        configuration
      ).addPlace(body, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return "success";
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @summary Deletes a place
     * @param {string} uuid place id to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePlace(
      uuid: string,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
      const localVarFetchArgs = PlaceApiFetchParamCreator(
        configuration
      ).deletePlace(uuid, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response;
          } else {
            throw response;
          }
        });
      };
    },
    /**
     * Returns all places
     * @summary get all places
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllPlaces(
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<Places> {
      const localVarFetchArgs =
        PlaceApiFetchParamCreator(configuration).getAllPlaces(options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     * Returns a single place
     * @summary Find place by ID
     * @param {string} uuid ID of place to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlaceById(
      uuid: string,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<Place> {
      const localVarFetchArgs = PlaceApiFetchParamCreator(
        configuration
      ).getPlaceById(uuid, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw response;
          }
        });
      };
    },
    /**
     *
     * @summary Update an existing place
     * @param {Place} body place object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePlace(
      body: Place,
      options?: any
    ): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
      const localVarFetchArgs = PlaceApiFetchParamCreator(
        configuration
      ).updatePlace(body, options);
      return (
        fetch: FetchAPI = portableFetch,
        basePath: string = BASE_PATH
      ) => {
        return fetch(
          basePath + localVarFetchArgs.url,
          localVarFetchArgs.options
        ).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response;
          } else {
            throw response;
          }
        });
      };
    },
  };
};

/**
 * PlaceApi - factory interface
 * @export
 */
export const PlaceApiFactory = function (
  configuration?: Configuration,
  fetch?: FetchAPI,
  basePath?: string
) {
  return {
    /**
     *
     * @summary Add a new place
     * @param {Place} body place object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addPlace(body: Place, options?: any) {
      return PlaceApiFp(configuration).addPlace(body, options)(fetch, basePath);
    },
    /**
     *
     * @summary Deletes a place
     * @param {string} uuid place id to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletePlace(uuid: string, options?: any) {
      return PlaceApiFp(configuration).deletePlace(uuid, options)(
        fetch,
        basePath
      );
    },
    /**
     * Returns all places
     * @summary get all places
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllPlaces(options?: any) {
      return PlaceApiFp(configuration).getAllPlaces(options)(fetch, basePath);
    },
    /**
     * Returns a single place
     * @summary Find place by ID
     * @param {string} uuid ID of place to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPlaceById(uuid: string, options?: any) {
      return PlaceApiFp(configuration).getPlaceById(uuid, options)(
        fetch,
        basePath
      );
    },
    /**
     *
     * @summary Update an existing place
     * @param {Place} body place object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePlace(body: Place, options?: any) {
      return PlaceApiFp(configuration).updatePlace(body, options)(
        fetch,
        basePath
      );
    },
  };
};

/**
 * PlaceApi - object-oriented interface
 * @export
 * @class PlaceApi
 * @extends {BaseAPI}
 */
export class PlaceApi extends BaseAPI {
  /**
   *
   * @summary Add a new place
   * @param {Place} body place object that needs to be added to the store
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PlaceApi
   */
  public addPlace(body: PlaceCandidate, options?: any) {
    return PlaceApiFp(this.configuration).addPlace(body, options)(
      this.fetch,
      this.basePath
    );
  }

  /**
   *
   * @summary Deletes a place
   * @param {string} uuid place id to delete
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PlaceApi
   */
  public deletePlace(uuid: string, options?: any) {
    return PlaceApiFp(this.configuration).deletePlace(uuid, options)(
      this.fetch,
      this.basePath
    );
  }

  /**
   * Returns all places
   * @summary get all places
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PlaceApi
   */
  public getAllPlaces(options?: any) {
    return PlaceApiFp(this.configuration).getAllPlaces(options)(
      this.fetch,
      this.basePath
    );
  }

  /**
   * Returns a single place
   * @summary Find place by ID
   * @param {string} uuid ID of place to return
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PlaceApi
   */
  public getPlaceById(uuid: string, options?: any) {
    return PlaceApiFp(this.configuration).getPlaceById(uuid, options)(
      this.fetch,
      this.basePath
    );
  }

  /**
   *
   * @summary Update an existing place
   * @param {Place} body place object that needs to be added to the store
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PlaceApi
   */
  public updatePlace(body: Place, options?: any) {
    return PlaceApiFp(this.configuration).updatePlace(body, options)(
      this.fetch,
      this.basePath
    );
  }
}
