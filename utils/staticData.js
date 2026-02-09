export const KEYBOARD_SHORTCUTS = {
  windows: {
    meta: {
      lastUpdated: "2026-02-09"
    },
    categories: {
      basic: [
        { keys: "Ctrl + C", action: "Copy" },
        { keys: "Ctrl + V", action: "Paste" },
        { keys: "Ctrl + X", action: "Cut" },
        { keys: "Ctrl + Z", action: "Undo" },
        { keys: "Ctrl + Y", action: "Redo" },
        { keys: "Ctrl + A", action: "Select all" },
        { keys: "Ctrl + S", action: "Save" },
        { keys: "Ctrl + P", action: "Print" }
      ],
      navigation: [
        { keys: "Alt + Tab", action: "Switch apps" },
        { keys: "Alt + F4", action: "Close active window" },
        { keys: "Win + D", action: "Show / hide desktop" },
        { keys: "Win + E", action: "Open File Explorer" },
        { keys: "Win + L", action: "Lock PC" }
      ],
      system: [
        { keys: "Win + I", action: "Open Settings" },
        { keys: "Win + R", action: "Run dialog" },
        { keys: "Ctrl + Shift + Esc", action: "Task Manager" }
      ]
    }
  },

  mac: {
    meta: {
      os: "macOS",
      lastUpdated: "2026-02-09"
    },
    categories: {
      basic: [
        { keys: "Cmd + C", action: "Copy" },
        { keys: "Cmd + V", action: "Paste" },
        { keys: "Cmd + X", action: "Cut" },
        { keys: "Cmd + Z", action: "Undo" },
        { keys: "Cmd + Shift + Z", action: "Redo" },
        { keys: "Cmd + A", action: "Select all" },
        { keys: "Cmd + S", action: "Save" }
      ],
      navigation: [
        { keys: "Cmd + Tab", action: "Switch apps" },
        { keys: "Cmd + Q", action: "Quit app" },
        { keys: "Cmd + Space", action: "Spotlight search" }
      ],
      system: [
        { keys: "Cmd + Option + Esc", action: "Force Quit" },
        { keys: "Cmd + ,", action: "Open app preferences" }
      ]
    }
  },

  linux: {
    meta: {
      os: "Linux",
      lastUpdated: "2026-02-09"
    },
    categories: {
      basic: [
        { keys: "Ctrl + C", action: "Copy" },
        { keys: "Ctrl + V", action: "Paste" },
        { keys: "Ctrl + X", action: "Cut" },
        { keys: "Ctrl + Z", action: "Undo" }
      ],
      navigation: [
        { keys: "Alt + Tab", action: "Switch apps" },
        { keys: "Ctrl + Alt + T", action: "Open terminal" }
      ],
      system: [
        { keys: "Ctrl + Alt + Del", action: "Logout / reboot options" }
      ]
    }
  }
};
