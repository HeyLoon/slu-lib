import { SeelenCommand, SeelenEvent } from '../handlers/mod.ts';
import { createInstanceInvoker, createInstanceOnEvent } from '../utils/State.ts';
import type { LauncherHistory as ILauncherHistory } from '@seelen-ui/types';

export * from './theme/mod.ts';
export * from './settings/mod.ts';
export * from './weg_items.ts';
export * from './wm_layout.ts';
export * from './placeholder.ts';
export * from './settings_by_app.ts';
export * from './settings/settings_by_monitor.ts';
export * from './icon_pack.ts';
export * from './plugin/mod.ts';
export * from './widget.ts';
export * from './profile.ts';

export class LauncherHistory {
  constructor(public inner: ILauncherHistory) {}
  static readonly getAsync = createInstanceInvoker(this, SeelenCommand.StateGetHistory);
  static readonly onChange = createInstanceOnEvent(this, SeelenEvent.StateHistoryChanged);
}
