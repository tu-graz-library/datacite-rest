import React, { Component } from 'react';
import { DoiRest } from '../lib/components/Doi/DoiRest'
import { MapDatacite } from '../lib/components/Doi/maptodatacite'
import rdmrecords from './rdmrecords.json';

/**
 * Demo creation of a DOI.
 *
 */

class CreateDoi extends Component {
    constructor(props) {
      super(props);
  
      const url = "https://api.test.datacite.org/dois";
      const auth ={username: "********", password: "********"};
      const recordId = "j8n4q-amddd"
      const prefix = "10.0356"
      const mapped = MapDatacite(rdmrecords.metadata, recordId, prefix);

      // assign the class and add url
      const _doirest = new DoiRest(url)
  
      // retrieve
      let response = _doirest.create(mapped, auth).then(data=>{
        console.log('dataaa', data)
        return data;
      });
      console.log(response)
  
    }
    render() {
      return <div>
        <h1>Coming soon</h1>
      </div>;
    }
  }
  
  export default CreateDoi;
  