import axios from 'axios';

/**
 * API client response.
 *
 * It's a wrapper/sieve around Axios to contain Axios coupling here. It maps
 * good and bad responses to a unified interface.
 *
 */
export class FetchDoiResponse {
    constructor(data, errors, code) {
      this.data = data;
      this.errors = errors;
      this.code = code;
    }
  }

export class FetchDoi {
    constructor(createUrl) {
      this.createUrl = createUrl;
    }



  /**
   * Calls the API to fetch doi from backend.
   *
   * @param {object} mappedMetadata - mapped metadata
   */
  async create(mappedMetadata) {
    try {
      let response = await axios.post(
        this.createUrl,
        mappedMetadata,
      );
      return new FetchDoiResponse(
        response.data,
        response.data.errors,
        response.status
      );
    } catch (error) {
      return new FetchDoiResponse(
        error.response.data,
        error.response.data.errors,
        error.response.status
      );
    }
  }

}
