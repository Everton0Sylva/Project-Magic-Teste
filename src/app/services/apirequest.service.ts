import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  public baseUri: string = ""

  constructor() {
    this.baseUri = "https://api.magicthegathering.io/v1/"
  }

  private headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*'
  }


  async Sets(name: string, block: string) {
    let uri = this.baseUri + `sets?name=${name}&block=${block}`
    let response = await fetch(uri, {
      method: "GET",
      headers: this.headers
    });
    if (response.ok) {
      return await response.json();
    }
  }


  async SetsBooster(code: string) {
    let uri = this.baseUri + `sets/${code}/booster`
    let response = await fetch(uri, {
      method: "GET",
      headers: this.headers
    });
    if (response.ok) {
      return await response.json();
    }else {
      throw new Error(response.status.toString());
    }
  }
}
