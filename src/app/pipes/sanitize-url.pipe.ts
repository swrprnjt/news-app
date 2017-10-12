import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Sanitizes a url
 * Takes a url string argument.
 * Usage:
 *   imageUrl | sanitizeUrl
*/
@Pipe({ name: 'sanitizeUrl' })
export class SanitizeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(urlString: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustUrl(urlString);
  }
}
