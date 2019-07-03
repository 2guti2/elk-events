import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { ApiMessagesService } from './api-messages.service';
import * as alertify from 'alertifyjs';

// https://github.com/mariohmol/ang-jsoneditor
@Component({
  selector: 'app-create-messages',
  templateUrl: './create-messages.component.html',
  styleUrls: ['./create-messages.component.css']
})
export class CreateMessagesComponent implements OnInit {

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  public data: any;
  
  constructor(private apiMessages: ApiMessagesService) { 
    this.initEditor();
  }

  ngOnInit() { }

  async send() {
    const json = this.editor.get();
    this.apiMessages.save(json).then(() => {
      alertify.success('Message created');
      this.initEditor();
    }).catch(e => {
      alertify.error('Messages need a title');
    });
  }

  private initEditor() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text'];
    this.editorOptions.mode = 'code';
    this.data = {
      title: 'New notification',
      body: 'A brief description of the message'
    }
    this.editorOptions.onChange = () => {};
  }
}
