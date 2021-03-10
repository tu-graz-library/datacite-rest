import React, { Component } from 'react';
import { DoiRest } from '../lib/components/Doi/DoiRest'
import { MapDatacite } from '../lib/components/Doi/MapDatacite'


/**
 * Demo creation of a DOI.
 *
 */
const rdmrecords = {
  "access": {
      "record": "public",
      "files": "public"
  },
  "metadata": {
      "publication_date": "2020-06-01",
      "resource_type": {
          "type": "image",
          "subtype": "image-photo"
      },
      "creators": [{
          "person_or_org": {
              "family_name": "Brown",
              "given_name": "Troy",
              "type": "personal"
          }
      }, {
          "person_or_org": {
              "name": "Troy Inc.",
              "type": "organizational"
          }
      }],
      "title": "A Romans story",
      "publisher": "TUG"

  }
}

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
  