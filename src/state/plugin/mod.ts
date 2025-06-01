import { SeelenCommand, SeelenEvent, type UnSubscriber } from '../../handlers/mod.ts';
import { List } from '../../utils/List.ts';
import { newFromInvoke, newOnEvent } from '../../utils/State.ts';
import type { Plugin } from '@seelen-ui/types';
import { getCurrentWidgetInfo } from '../widget.ts';

export class PluginList extends List<Plugin> {
  static getAsync(): Promise<PluginList> {
    return newFromInvoke(this, SeelenCommand.StateGetPlugins);
  }

  static onChange(cb: (user: PluginList) => void): Promise<UnSubscriber> {
    return newOnEvent(cb, this, SeelenEvent.StatePluginsChanged);
  }

  forCurrentWidget(): Plugin[] {
    const target = getCurrentWidgetInfo().id;
    return this.inner.filter((plugin) => plugin.target === target);
  }
}
