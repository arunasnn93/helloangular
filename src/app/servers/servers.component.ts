import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServers = false;
  serverCreated = 'No server was created';
  serverName = 'Test';
  serverCreatedFlag = false;
  servers = ['Testserver', 'TestServer 2'];

  constructor() {
    setTimeout(() => {this.allowServers = true; } , 2000);
  }

  ngOnInit(): void {
  }

  onAddServerClick(){
    this.serverCreatedFlag = true;
    this.servers.push(this.serverName);
    this.serverCreated = 'Server was created name is ' + this.serverName;
  }

}
