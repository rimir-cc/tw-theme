# theme

> Shared visual theme for rimir plugins

Shared visual CSS classes (prefix `rr-`) used across all rimir plugins. Provides consistent styling for tabs, panels, tables, callouts, notices, badges, forms, status messages, and the settings hub layout.

## Key features

* **Tabs** -- `rr-tabs`, `rr-tab`, `rr-tab-active` for horizontal tab bars
* **Callouts** -- four types (info, warning, tip, danger) via reusable template
* **Notices** -- alert banners (warning, info, danger, success)
* **Badges** -- circular and rectangular pill badges
* **Settings hub layout** -- sidebar + content panel classes for core-hook
* **Utilities** -- muted, mono, nowrap, small helper classes

## Prerequisites

No external prerequisites.

## Quick start

Install plugin. Use `rr-` prefixed CSS classes in your tiddlers. For callouts:

```html
<$transclude $tiddler="$:/plugins/rimir/theme/callout" type="info">
<$fill $name="body">Your message</$fill>
</$transclude>
```

## Class reference

### Tabs

| Class | Purpose |
|-------|---------|
| `rr-tabs` | Flex container for tab bar |
| `rr-tab` | Individual tab button |
| `rr-tab-active` | Active tab (add alongside `rr-tab`) |

```html
<div class="rr-tabs">
  <$button class="rr-tab rr-tab-active">Tab 1</$button>
  <$button class="rr-tab">Tab 2</$button>
</div>
```

### Panels

| Class | Purpose |
|-------|---------|
| `rr-panel` | Bordered container with background |
| `rr-panel-body` | Padded inner content area |

### Tables

| Class | Purpose |
|-------|---------|
| `rr-table` | Full-width collapsed table |
| `rr-row-error` | Red background row (on `<tr>`) |
| `rr-row-warn` | Yellow background row (on `<tr>`) |

### Callouts

Use the template `$:/plugins/rimir/theme/callout` with parameters `type` (`info`/`warning`/`tip`/`danger`) and optional `label`.

| Class | Purpose |
|-------|---------|
| `rr-callout` | Base callout box |
| `rr-callout-info` | Blue left border |
| `rr-callout-warning` | Amber left border |
| `rr-callout-tip` | Green left border |
| `rr-callout-danger` | Red left border |
| `rr-callout-label` | Bold uppercase label |

### Notices

Use the template `$:/plugins/rimir/theme/notice` with parameter `type` (`warning`/`info`/`danger`/`success`).

| Class | Purpose |
|-------|---------|
| `rr-notice` | Base notice banner |
| `rr-notice-warning` | Yellow background |
| `rr-notice-info` | Light blue background |
| `rr-notice-danger` | Light red background |
| `rr-notice-success` | Light green background |

### Status Messages

| Class | Purpose |
|-------|---------|
| `rr-status-loading` | Muted italic loading text |
| `rr-status-error` | Red alert box |
| `rr-status-success` | Green success box |
| `rr-status-info` | Muted info text |

### Badges

| Class | Purpose |
|-------|---------|
| `rr-badge-circle` | 16px round badge |
| `rr-badge-added` | Green circle (use with `rr-badge-circle`) |
| `rr-badge-removed` | Red circle (use with `rr-badge-circle`) |
| `rr-badge-rect` | Rectangular pill badge |

### Forms

| Class | Purpose |
|-------|---------|
| `rr-input-row` | Flex row with gap |
| `rr-input` | Styled text input |

### Link Buttons

| Class | Purpose |
|-------|---------|
| `rr-link-btn` | Primary-colored link-style button |
| `rr-link-btn-danger` | Alert-colored variant (add alongside `rr-link-btn`) |

### Settings Hub

| Class | Purpose |
|-------|---------|
| `rr-settings-hub` | Flex container for sidebar + content layout |
| `rr-settings-sidebar` | Left sidebar with plugin list |
| `rr-settings-plugin-item` | Sidebar button for each plugin |
| `rr-settings-plugin-active` | Active state highlight (accent border) |
| `rr-settings-plugin-name` | Plugin name text (truncated) |
| `rr-settings-plugin-version` | Version badge |
| `rr-settings-content` | Right content area |
| `rr-settings-header` | Plugin header with icon + name + description |
| `rr-settings-header-name` | Plugin name in header |
| `rr-settings-header-desc` | Plugin description in header |
| `rr-settings-info-card` | Dashed info card for plugins without settings |

### Utilities

| Class | Purpose |
|-------|---------|
| `rr-muted` | Muted foreground color |
| `rr-mono` | Monospace font |
| `rr-nowrap` | No text wrapping |
| `rr-small` | 0.85em font size |

## Plugin Library

Install from the [rimir plugin library](https://rimir-cc.github.io/tw-plugin-library/) via *Control Panel → Plugins → Get more plugins*.

## Demo

Try this plugin in the [live demo wiki](https://rimir-cc.github.io/tw-demo/).

## License

MIT -- see [LICENSE.md](LICENSE.md)
