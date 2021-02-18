import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: Config = {
    // imageServer: "http://localhost:8080",
    // apiServer: "http://192.168.1.103:8080/api"
    
    imageServer: "http://kpi4eshop.eu-central-1.elasticbeanstalk.com",
    apiServer: "http://kpi4eshop.eu-central-1.elasticbeanstalk.com/api"
  };
  constructor(private httpClient: HttpClient) {
    console.info("Init configService");
    this.httpClient.get<Config>("/assets/config.json").subscribe(
      data => {
        const configDto: Config = data;
        console.info("config:\n" + this.config);
        console.info("configDto:\n" + configDto);
        if (configDto.imageServer != "") 
          this.config.imageServer = configDto.imageServer;
        if (configDto.apiServer != "") 
          this.config.apiServer = configDto.apiServer;
        console.info("config:\n" + this.config);
      }
    )
  }

  getImageServer(): string { 
    console.info("getImageServer: " + this.config.imageServer);
    return this.config.imageServer 
  }

  getApiServer(): string { 
    console.info("getApiServer: " + this.config.apiServer);
    return this.config.apiServer 
  }

}
