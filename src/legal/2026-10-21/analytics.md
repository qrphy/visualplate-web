# Analytics Notice

Version: 2026-10-21 · Effective: 21 October 2026

Optional usage analytics helps Visual Plate understand which features work and where the app needs improvement. It is off unless a signed-in account allows the current notice. Declining does not affect scanning, free dishes or paid features.

In the reviewed release configuration analytics is disabled because no PostHog project key is configured. Allowing a preference does not itself cause an event to be sent. Analytics must not be enabled until the provider region, retention and network-data settings have been verified and disclosed under an updated notice where required.

When offered and enabled, the event types supported by the client include screen views, scan completion, paywall display/dismissal, purchase success/failure and purchase restoration. Allowed properties are limited to screen/scan type, dish count, recognition confidence when present, paywall variant and product identifier. The existence of a supported event does not mean every screen sends it.

Events use a random analytics identifier assigned to your account. It is pseudonymous, not anonymous, and is different from your sign-in, account and installation identifiers. The client asks PostHog not to create a person profile. Event payloads do not contain menu photos, menu text, dish names, email addresses or payment-card details. PostHog still receives network requests and may process network metadata such as IP addresses; omitting IP from the JSON is not a guarantee that the provider never receives it. The described client does not send session recordings.

The app checks permission when an event occurs and again immediately before sending. A queued event is dropped if permission or account identity changes. No optional event is sent for a guest, before the account preference is loaded, or when permission is declined, withdrawn, outdated or unavailable.

Turn analytics off in Profile → Settings → Privacy settings. New events stop on that iPhone immediately. If offline, the change is retried; the server and other devices learn it when connected. Server-saved withdrawal also queues removal of previously recorded events for that analytics identifier when provider erasure is configured; this is separate from stopping new collection and may take time to complete.

For access or deletion questions contact visualplate800@gmail.com. The Privacy Policy explains the controller, legal bases, international processing and rights. Withdrawal does not affect earlier lawful processing.


Related documents: [Terms of Use](/legal/2026-10-21/terms/) · [Privacy Policy](/legal/2026-10-21/privacy/) · [AI processing](/legal/2026-10-21/ai-processing/) · [Photo improvement](/legal/2026-10-21/photo-improvement/) · [Analytics](/legal/2026-10-21/analytics/).
