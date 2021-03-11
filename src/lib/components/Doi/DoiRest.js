import axios from 'axios';
import {DecryptAES} from '../cryptodecript';

/**
 * API client response.
 *
 * It's a wrapper/sieve around Axios to contain Axios coupling here. It maps
 * good and bad responses to a unified interface.
 *
 */
export class DoiRestResponse {
    constructor(data, errors, code) {
      this.data = data;
      this.errors = errors;
      this.code = code;
    }
  }

export class DoiRest {
    constructor(createUrl) {
      this.createUrl = createUrl;
    }



  /**
   * Calls the API to create a new DOI.
   *
   * @param {object} record - Serialized record
   * @param {object} auth - Cridentials for DOI
   */
  async create(record, auth, iv) {
    try {
      let response = await axios.post(
        this.createUrl,
        record,
        { headers: { 'Content-Type': 'application/vnd.api+json' }, auth: {username: auth.username, password:
          DecryptAES(
          auth.password,
          "01ab38d5e05c92aa098921d9d4626107133c7e2ab0e4849558921ebcc242bcb0",
          iv
        ) } }
      );
      return new DoiRestResponse(
        response.data,
        response.data.errors,
        response.status
      );
    } catch (error) {
      return new DoiRestResponse(
        error.response.data,
        error.response.data.errors,
        error.response.status
      );
    }
  }

}
