/* exported config */

var config = {
  // Show help text for images
  show_help: true,

  // Versions list (optional if provided by .versions.json)
  versions: [
    "2020.4-ow19",
    "2024.1-ow23.05.5-mini", 
    "2024.1-ow23.05.5-default",
    "2024.1-ow24.10.1-mini"
  ],
  versions_info: {
    "2020.4-ow19": {allow_build: false, openwrt_version: "19.07.10", libremesh_version: "2020.4-ow19"},
    "2024.1-ow23.05.5-mini": {openwrt_version: "23.05.5", libremesh_version: "2024.1-ow23.05.5", flavor: "mini"},
    "2024.1-ow23.05.5-default": {openwrt_version: "23.05.5", libremesh_version: "2024.1-ow23.05.5", flavor: "default"},
    "2024.1-ow24.10.1-mini": {
      version_text: "2024.1-ow24.10.1-mini (build only)", 
      build_only: true, 
      openwrt_version: "24.10.1", 
      libremesh_version: "2024.1-ow24.10.1", 
      flavor: "mini"}
  },

  // Pre-selected version (optional if provided by .versions.json)
  default_version: "2024.1-ow23.05.5-mini",

  // Image download URL (e.g. "https://downloads.openwrt.org")
  image_url: "https://downloads.libremesh.org",
  openwrt_image_url: "https://downloads.openwrt.org",

  // Insert snapshot versions (optional)
  //show_snapshots: true,

  // Info link URL (optional)
  info_url: "https://openwrt.org/start?do=search&id=toh&q={title} @toh",

  // Attended Sysupgrade Server support (optional)
  asu_url: "https://sysupgrade.antennine.org",
  // asu_extra_packages: ["owut"],

  flavors: {
      "default": [
        "babeld-auto-gw-mode",
        "batctl-default",
        "check-date-http",
        "lime-app",
        "lime-debug",
        "lime-docs",
        "lime-docs-minimal",
        "lime-hwd-ground-routing",
        "lime-hwd-openwrt-wan",
        "lime-proto-anygw",
        "lime-proto-babeld",
        "lime-proto-batadv",
        "shared-state",
        "shared-state-babeld_hosts",
        "shared-state-bat_hosts",
        "shared-state-nodes_and_links"
    ],
    "mini": [
        "babeld-auto-gw-mode",
        "lime-docs-minimal",
        "lime-hwd-openwrt-wan",
        "lime-proto-anygw",
        "lime-proto-babeld",
        "lime-proto-batadv",
        "shared-state",
        "shared-state-babeld_hosts",
    ]
  }
};
