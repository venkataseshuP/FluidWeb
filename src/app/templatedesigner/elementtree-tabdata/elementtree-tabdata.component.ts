import { Component, OnInit } from '@angular/core';
import { ParentDataService } from '../../dataService';

@Component({
  selector: 'app-elementtree-tabdata',
  templateUrl: './elementtree-tabdata.component.html',
  styleUrls: ['./elementtree-tabdata.component.css']
})
export class ElementtreeTabdataComponent implements OnInit {

  constructor(private dataService: ParentDataService) { }
  templateId = '34237cf3-a967-41d0-a5ee-e28d21404055';
  ngOnInit(): void {
  }

  typeElements = {
    "id": {
      "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2482",
      "namespaceId": "N_0001"
    },
    "templateId": "34237cf3-a967-41d0-a5ee-e28d21404055",
    "typeName": "PrimaryAccount",
    "desc": "",
    "type": "CT",
    "typeelements": [
      {
        "id": {
          "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2482",
          "namespaceId": "N_0001",
          "slNo": "1"
        },
        "elementName": "accountNo",
        "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
        "elementDesc": "",
        "minOccurs": "0",
        "maxOccurs": "1",
        "typesrepo": {
          "id": {
            "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
            "namespaceId": "N_0001"
          },
          "templateId": "34237cf3-a967-41d0-a5ee-e28d21404055",
          "typeName": "AccountNumber",
          "desc": "",
          "type": "ST",
          "typeelements": []
        }
      },
      {
        "id": {
          "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2481",
          "namespaceId": "N_0001",
          "slNo": "2"
        },
        "elementName": "fullName",
        "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bg",
        "elementDesc": "",
        "minOccurs": "0",
        "maxOccurs": "1",
        "typesrepo": {
          "id": {
            "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
            "namespaceId": "N_0001"
          },
          "templateId": "34237cf3-a967-41d0-a5ee-e28d2140405612",
          "typeName": "Name",
          "desc": "",
          "type": "ST",
          "typeelements": []
        }
      },
      {
        "id": {
          "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2481",
          "namespaceId": "N_0001",
          "slNo": "3"
        },
        "elementName": "address",
        "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bg",
        "elementDesc": "",
        "minOccurs": "0",
        "maxOccurs": "1",
        "typesrepo": {
          "id": {
            "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
            "namespaceId": "N_0001"
          },
          "templateId": "34237cf3-a967-41d0-a5ee-e28d21404056",
          "typeName": "Address",
          "desc": "",
          "type": "CT",
          "typeelements": [
            {
              "id": {
                "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2481",
                "namespaceId": "N_0001",
                "slNo": "1"
              },
              "elementName": "address1",
              "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bg",
              "elementDesc": "",
              "minOccurs": "0",
              "maxOccurs": "1",
              "typesrepo": {
                "id": {
                  "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
                  "namespaceId": "N_0001"
                },
                "templateId": "34237cf3-a967-41d0-a5ee-e28d21404056",
                "typeName": "Address1",
                "desc": "",
                "type": "ST",
                "typeelements": []
              }
            },
            {
              "id": {
                "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2481",
                "namespaceId": "N_0001",
                "slNo": "2"
              },
              "elementName": "address2",
              "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bg",
              "elementDesc": "",
              "minOccurs": "0",
              "maxOccurs": "1",
              "typesrepo": {
                "id": {
                  "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
                  "namespaceId": "N_0001"
                },
                "templateId": "34237cf3-a967-41d0-a5ee-e28d21404056",
                "typeName": "Address1",
                "desc": "",
                "type": "ST",
                "typeelements": []
              }
            },            {
              "id": {
                "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2481",
                "namespaceId": "N_0001",
                "slNo": "3"
              },
              "elementName": "mobileDetails",
              "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bg",
              "elementDesc": "",
              "minOccurs": "0",
              "maxOccurs": "1",
              "typesrepo": {
                "id": {
                  "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
                  "namespaceId": "N_0001"
                },
                "templateId": "34237cf3-a967-41d0-a5ee-e28d21404056",
                "typeName": "Mobile",
                "desc": "",
                "type": "CT",
                "typeelements": [
                  {
                    "id": {
                      "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2481",
                      "namespaceId": "N_0001",
                      "slNo": "2"
                    },
                    "elementName": "mobileNo1",
                    "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bg",
                    "elementDesc": "",
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "typesrepo": {
                      "id": {
                        "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
                        "namespaceId": "N_0001"
                      },
                      "templateId": "34237cf3-a967-41d0-a5ee-e28d21404056",
                      "typeName": "Phone",
                      "desc": "",
                      "type": "ST",
                      "typeelements": []
                    }
                  },            
                  {
                    "id": {
                      "typeId": "debc16fd-2135-442c-92a9-5c57a7fb2481",
                      "namespaceId": "N_0001",
                      "slNo": "2"
                    },
                    "elementName": "mobileNo2",
                    "elementTypeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bg",
                    "elementDesc": "",
                    "minOccurs": "0",
                    "maxOccurs": "1",
                    "typesrepo": {
                      "id": {
                        "typeId": "69e3a4d8-952b-4aee-a5ef-1a9cdf7265bf",
                        "namespaceId": "N_0001"
                      },
                      "templateId": "34237cf3-a967-41d0-a5ee-e28d21404056",
                      "typeName": "Phone",
                      "desc": "",
                      "type": "ST",
                      "typeelements": []
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }

  getActiveTabContent() {
    return this.dataService.getActiveTabContent();
  }

  getTabs() {
    let tabs = this.getActiveTabContent()['tabs'];
    if (!tabs) {
      this.getActiveTabContent()['tabs'] = [];
    }
    return this.getActiveTabContent()['tabs'];
  }

  getActiveTabId() {
    return this.dataService.getActiveTabContent()['activeTabId'];
  }

}
