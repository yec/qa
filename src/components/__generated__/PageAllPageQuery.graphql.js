/**
 * @flow
 * @relayHash 215a192e30660e8a32af9c8361c4ca1e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PageAllPageQueryVariables = {||};
export type PageAllPageQueryResponse = {|
  +viewer: {|
    +allPages: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string,
          +heading: string,
          +subHeading: string,
          +heroImageUrl: string,
        |}
      |}>
    |}
  |}
|};
export type PageAllPageQuery = {|
  variables: PageAllPageQueryVariables,
  response: PageAllPageQueryResponse,
|};
*/


/*
query PageAllPageQuery {
  viewer {
    allPages(last: 100, orderBy: heading_DESC) {
      edges {
        node {
          id
          heading
          subHeading
          heroImageUrl
          __typename
        }
        cursor
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "PageEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Page",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "heading",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "subHeading",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "heroImageUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasPreviousPage",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "startCursor",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "heading_DESC",
    "type": "PageOrderBy"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PageAllPageQuery",
  "id": null,
  "text": "query PageAllPageQuery {\n  viewer {\n    allPages(last: 100, orderBy: heading_DESC) {\n      edges {\n        node {\n          id\n          heading\n          subHeading\n          heroImageUrl\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "viewer",
          "allPages"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "PageAllPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "allPages",
            "name": "__ListPage_allPages_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "PageConnection",
            "plural": false,
            "selections": v1
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PageAllPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPages",
            "storageKey": "allPages(last:100,orderBy:\"heading_DESC\")",
            "args": v2,
            "concreteType": "PageConnection",
            "plural": false,
            "selections": v1
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPages",
            "args": v2,
            "handle": "connection",
            "key": "ListPage_allPages",
            "filters": []
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4dd75cc89527af420b64448d00c25493';
module.exports = node;
