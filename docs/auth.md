# Auth

## Table of Contents <!-- omit in toc -->

- [Auth via Google](#auth-via-google)

## Auth via Google

1. You need a `Client Id`. You can find these pieces of information by going to the [Developer Console](https://console.cloud.google.com/), clicking your project (if you don't have it create project here https://console.cloud.google.com/projectcreate) -> `APIs & services` -> `credentials`.

1. Find Client Id in the `Additional information` section and copy it.

1. Add `Client Id` to `NEXT_PUBLIC_GOOGLE_CLIENT_ID` in `.env.local`

   ```text
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=abc
   ```

1. Add your domains to `Authorized JavaScript origins` like this:

   > For local tests or development add both `http://localhost` and `http://localhost:<port_number>`

---

Previous: [Architecture](architecture.md)

Next: [Testing](testing.md)
