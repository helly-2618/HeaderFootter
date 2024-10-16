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
    // <img class="headerimage" src="${require("../../../sharepoint/assets/NotFound.png")}"  alt="asu">
    // <img class="headerimage" src="${require("../../../sharepoint/assets/NotFound.png")}"  alt="can">

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
                  <a href="#" class="decoration text-white padding-x">Taxes</a>
              </li>
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x">maangment</a>
              </li>
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x">employys</a>
              </li>
              <li class="list-style">
                  <a href="#" class="decoration text-white padding-x">Customer</a>
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
