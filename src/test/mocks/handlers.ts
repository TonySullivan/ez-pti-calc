import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock Census Geocoder endpoint
  http.get('https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress', ({ request }) => {
    const url = new URL(request.url);
    const address = url.searchParams.get('address');

    if (!address) {
      return new HttpResponse(JSON.stringify({
        result: {
          addressMatches: []
        }
      }), { status: 400 });
    }

    // Default mock response for standard test address
    return HttpResponse.json({
      result: {
        addressMatches: [
          {
            matchedAddress: "100 MAIN ST, RALEIGH, NC, 27601",
            coordinates: { x: -78.6382, y: 35.7796 },
            geographies: {
              "Counties": [
                {
                  "NAME": "Wake County",
                  "GEOID": "37183",
                  "STATE": "37",
                  "COUNTY": "183"
                }
              ],
              "Incorporated Places": [
                {
                  "BASENAME": "Raleigh",
                  "NAME": "Raleigh city",
                  "GEOID": "3755000"
                }
              ]
            }
          }
        ]
      }
    });
  }),
];
