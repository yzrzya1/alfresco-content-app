import { NgModule } from '@angular/core';
import { AosExtensionModule } from '@alfresco/adf-office-services-ext';
import { AlfrescoObjectRecognitionModule } from 'alfresco-objects-recognition';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [AosExtensionModule, AlfrescoObjectRecognitionModule]
})
export class AppExtensionsModule { }
