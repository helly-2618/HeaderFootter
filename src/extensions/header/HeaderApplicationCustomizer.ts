
// // import { override } from '@microsoft/decorators';
// import { Log } from '@microsoft/sp-core-library';
// import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';
// import pnp from 'sp-pnp-js';
// import * as strings from 'HeaderApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'HeaderApplicationCustomizer';

// export interface IHeaderApplicationCustomizerProperties {
//   // Define your custom properties here
// }

// // @override
// export default class HeaderApplicationCustomizer extends BaseApplicationCustomizer<IHeaderApplicationCustomizerProperties> {

//   public onInit(): Promise<void> {
//     Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    
//     // Setup PnPjs with SharePoint context
//     pnp.setup({
//       spfxContext: this.context
//     });

//     // Retrieve list items using PnPjs
//     // pnp.sp.web.lists.getByTitle("Attendees_List").items.select("Title", "Id", "CustomField1", "CustomField2").getPaged().then((response: { results: any[]; }) => {
//     pnp.sp.web.lists.getByTitle("Attendees_List").items.select("Title", "Feedback").getPaged().then((response: { results: any[]; }) => {
//       // Log list items
//       console.log(JSON.stringify(response.results, null, 4));

//       // Iterate over list items
//       response.results.forEach((item: { Title: any; Feedback: any; }) => {
//       // response.results.forEach((item: { Title: any; Id: any; CustomField1: any; CustomField2: any; }) => {
//         const title = item.Title;
//         const feedback = item.Feedback;
//         // const id = item.Id;
//         // const customField1 = item.CustomField1;
//         // const customField2 = item.CustomField2;

//         // Log item details
//         // console.log(`Item with Id: ${feedback} and title: ${title} has CustomField1 value: ${customField1} and CustomField2 value: ${customField2}`);
//         console.log(`Item with Id: ${feedback} and title: ${title} has CustomField1 value:`);
//       });
//     }).catch((error: any) => {
//       // Log error if fetching list items fails
//       console.error("Error fetching list items:", error);
//       Dialog.alert(`Error fetching list items: ${error}`).catch((err) => {
//         console.error("Error displaying alert:", err);
//       });
//     });

//     return Promise.resolve();
//   }
// }



//============================================================

// import { Log } from '@microsoft/sp-core-library';
// import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';
// import '../../css folder/Header.css';
// import {
//   PlaceholderContent,
//   PlaceholderName,
// } from '@microsoft/sp-application-base';
// // import { WebPartContext } from "@microsoft/sp-webpart-base";
// // import { sp } from '@pnp/sp';
// import '@pnp/sp/lists';
// import { sp } from "@pnp/sp";

// import * as strings from 'HeaderApplicationCustomizerStrings';
// import { ISPFXContext } from '@pnp/pnpjs';

// const LOG_SOURCE: string = 'HeaderApplicationCustomizer';

// export interface IHeaderApplicationCustomizerProperties {
//   testMessage: string;
// }

// export default class HeaderApplicationCustomizer extends BaseApplicationCustomizer<IHeaderApplicationCustomizerProperties> {

//   public onInit(): Promise<void> {
//     Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
//     sp.setup({
//       spfxContext: this.context as unknown as ISPFXContext
//     }); // Initialize PnPjs
  
//     // let message: string = this.properties.testMessage || '(No properties were provided.)';
  

//     const topPlaceholder: PlaceholderContent | undefined = this.context.placeholderProvider?.tryCreateContent(PlaceholderName.Top);
//     if (topPlaceholder) {
//       // Fetch list items using PnPjs
//       console.log("GETTTING DAta");
//       sp.web.lists.getByTitle("Attendees_List").items.get().then((items: any[]) => {
        
//         let listHtml = `<ul>`;
//         items.forEach(item => {
//           listHtml += `<li>${item.Title}</li>`; // Assuming "Title" is a column in your list
//         });
//         listHtml += `</ul>`;
//         topPlaceholder.domElement.innerHTML = listHtml;
//       }).catch((error: any) => {
//         Dialog.alert(`Error fetching list items: ${error}`).catch((err) => {console.log(err);
//         });
//       });
//     }else {
//   console.error("Placeholder 'Top' is undefined.");
// }


//     // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {});

//     return Promise.resolve();
//   }
// }

//=================================================================




import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import '../../css folder/Header.css'
import {
  // BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName,
  // PlaceholderPrvider
} from '@microsoft/sp-application-base';

import * as strings from 'HeaderApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HeaderApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
*/
export interface IHeaderApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}
  require("../../../sharepoint/assets/NotFound.png")

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HeaderApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
      // topPlaceholder.domElement.innerHTML = `<div>

      // <div style="text-align:center" class="ms-bgColor-themeLight ms-fontColor-black">
      // Hello!!! This is the header part of the page.
      // </div>
      // </div>`;
    }

    const topPlaceholder: PlaceholderContent | undefined = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    if (topPlaceholder) {
      // <img class="headerimage" src="${require("../../../sharepoint/assets/NotFound.png")}"  alt="asu">
      // <img class="headerimage" src="${require("../../../sharepoint/assets/NotFound.png")}"  alt="can">
      topPlaceholder.domElement.innerHTML = `
      <div class="navbar bg-color flex flex-row w-full">
      <div class="country-option flex-end flex padding-y">
      </div>
      <div class="container flex flex-wrap align-center justify-between padding-x  text-white">
          <div class="logo-container">
              <img class="imglogo" alt="log" src="${require("../../../sharepoint/assets/logo.png")}" />
          </div>
          <ul class="menu-container flex">
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x ">Home</a>
              </li>
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x">About</a>
              </li>
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x">Contact</a>
              </li>
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x">Services</a>
              </li>
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x button">Careers</a>
              </li>
          </ul>
      </div>
  </div>
`;
    }
    

    Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
      /* handle error */
    });



    return Promise.resolve();
  }
}
