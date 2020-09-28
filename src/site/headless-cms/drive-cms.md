---
title: Google Drive CMS
repo: max-barry/google-drive-cms
homepage: https://www.drivecms.xyz
opensource: "Yes"
typeofcms: "API Driven"
supportedgenerators:
  - All
description: Uses a combination of Google Sheets and Docs to maintain content on a website.
---
## Drive CMS
The Google Drive CMS uses a combination of Google Sheets and Google Docs to maintain content on a website. These documents are sent to a site or a supporting service (e.g. a Firebase database) via a POST request to an API the admin specifies.

The only requirements to run the Google Drive CMS are:

- A duplicate copy of the Google Drive CMS template
- An API endpoint to handle the data sent from the spreadsheet

It is possible to run the CMS without writing server side code at the chosen API endpoint. The CMS' content can be exported as a JSON file, or it can be added directly to any PAAS databases that expose an API. An example of using Firebase to create the latter of these flows can be found on our examples page.

### Practical examples

The following scenarios are good use cases for the Google Drive CMS:

- A spreadsheet of names and addresses that are sent to an event website's REST API
- A news blog posting rich text content pulled from a Firebase database
- For exporting JSON to consume as part of the generation of a static site through Jekyll
- Triggering and writing email MailChimp campaigns through a Zapier backed service
