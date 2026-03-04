/* exported config */

var config = {
  // Show help text for images
  show_help: true,

  // Versions list (optional if provided by .versions.json)
  versions: [
    "SNAPSHOT",
    "25.12-SNAPSHOT",
    "25.12.0",
    "24.10-SNAPSHOT",
    "24.10.5",
    "23.05-SNAPSHOT",
    "23.05.6",
  ],

  // Pre-selected version (optional if provided by .versions.json)
  // default_version: "24.10.5",

  // Image download URL (e.g. "https://downloads.openwrt.org")
  image_url: "https://downloads.openwrt.org",
  feed_url: "https://downloads.openwrt.org",

  // Insert snapshot versions (optional)
  show_snapshots: true,
  upcoming_version: false,

  // Info link URL (optional)
  info_url: "https://openwrt.org/start?do=search&id=toh&q={title} @toh",

  // Attended Sysupgrade Server support (optional)
  asu_url: "https://sysupgrade.antennine.org",
  asu_fallback_url: "https://sysupgrade-01.antennine.org",
  asu_extra_packages: [""],

  lime: {
    feed_url: "https://feed.libremesh.org",
    pubkey_apk:
      "-----BEGIN PUBLIC KEY-----\n\
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdFJZ2qVti49Ol8LJZYuxgOCLowBS\n\
8bI86a7zqhSbs5yon3JON7Yee7CQOgqwPOX5eMALGOu8iFGAqIRx5YjfYA==\n\
-----END PUBLIC KEY-----",
    pubkey_opkg: "RWSnGzyChavSiyQ+vLk3x7F0NqcLa4kKyXCdriThMhO78ldHgxGljM/8",
    branches: [
      // "main",
      "master",
      "dev",
    ],
  },
};
