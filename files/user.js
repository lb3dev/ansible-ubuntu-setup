/*
MIT License

Copyright (c) 2020 arkenfox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// https://raw.githubusercontent.com/arkenfox/user.js/refs/heads/master/user.js

/* 0105: disable sponsored content on Firefox Home (Activity Stream)
 * [SETTING] Home>Firefox Home Content ***/
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+] Sponsored stories
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // [FF140+] Support Firefox

user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);

/** RECOMMENDATIONS ***/
/* 0320: disable recommendation pane in about:addons (uses Google Analytics) ***/
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
/* 0321: disable recommendations in about:addons' Extensions and Themes panes [FF68+] ***/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0322: disable personalized Extension Recommendations in about:addons and AMO [FF65+]
 * [NOTE] This pref has no effect when Health Reports (8501) are disabled
 * [SETTING] Privacy & Security>Firefox Data Collection and Use>Allow personalized extension recommendations
 * [1] https://support.mozilla.org/kb/personalized-extension-recommendations ***/
user_pref("browser.discovery.enabled", false);

/** ACTIVITY STREAM ***/
/* 0335: disable Firefox Home (Activity Stream) telemetry ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);

/** Additional saving passwords settings ***/
user_pref("signon.autofillForms", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);

/* 5017: disable Form Autofill
 * If .supportedCountries includes your region (browser.search.region) and .supported
 * is "detect" (default), then the UI will show. Stored data is not secure, uses JSON
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]

/* 8500: disable new data submission [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 8501: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection and Use>Send technical... data ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* Custom: disable Usage Pings
 * [SETTING] Privacy & Security>Firefox Data Collection and Use>Send daily usage ping to Mozilla ***/
user_pref("datareporting.usage.uploadEnabled", false);

/* Dark mode ***/
user_pref("layout.css.prefers-color-scheme.content-override", 0);

/* Always show bookmark toolbar
 * [SETTING] Right click bookmark toolbar on new page > Bookmarks Toolbar > Always Show ***/
user_pref("browser.toolbars.bookmarks.visibility", "always");

/* Warn before Quit (Ctrl + Q) ***/
user_pref("browser.warnOnQuitShortcut", false);

/* Disable Picture-in-Picture controls ***/
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("media.hardwaremediakeys.enabled", false);

/* Disable Recommend extensions as you browse ***/
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

/* Disable Recommend features as you browse ***/
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

/* Disable Shortcut: Click and hold the link for 1 second (long press) ***/
user_pref("browser.ml.linkPreview.longPress", false);

/* Disable link previews ***/
user_pref("browser.ml.linkPreview.enabled", false);
