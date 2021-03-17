/**
 * Map data to datacite
 * @events
 *  publish - Triggers a state move from draft or registered to findable
 *  register - Triggers a state move from draft to registered
 *  hide - Triggers a state move from findable to registered
 *  docs: https://support.datacite.org/docs/api-create-dois
 *  test created: https://api.test.datacite.org/dois/10.0356/datacite-8baxw 
 *
 */

export function MapDatacite(metadata, recordid, prefix) {
  // use this to generate random string
  // let r = Math.random().toString(36).substring(7);

  // empty creators array
  const creators = []

  // // func return first letter capit -
  // const capitalize = (s) => {
  //   if (typeof s !== 'string') return ''
  //   return s.charAt(0).toUpperCase() + s.slice(1)
  // }

  // loop through and add the creators
  if (metadata.creators){
    for (const creator of metadata.creators){
      creators.push({"name": creator.person_or_org.name})
    }
  }

    const dataciterecord = {
        data : {
          id: prefix+"/datacite-"+recordid,
          type: "dois",
          attributes: {
            event: "publish",
            doi: prefix+"/datacite-"+recordid,
            creators,
            titles: [{
              title: metadata.title
            }],
            publisher: metadata.publisher,
            publicationYear: metadata.publication_date,
            types: {
              resourceType: metadata.resource_type.type,
              resourceTypeGeneral: "Other"
            },
            url: "https://repository.tugraz.at",
            schemaVersion: "http://datacite-rest.org/schema/kernel-4"
          }
        }
      };
      return dataciterecord
    }
