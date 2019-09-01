import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
    exports: [FroalaEditorModule, FroalaViewModule],
})

export class FroalaModuleEditor {}
