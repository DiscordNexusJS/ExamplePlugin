import { Events } from "../../../../../src/event/Events.js";
import { PluginBase } from "../../../../../src/plugin/PluginBase.js";
import { TestCommand } from "./command/TestCommand.js";
import { EventListener } from "./EventListener.js";
import { TestScheduler } from "./scheduler/TestScheduler.js";

export class Example extends PluginBase {

    onLoad() {
        console.log("Plugin example loaded");
    }

    onEnable() {
        this.saveDefaultConfig();
        this.getNexus().getCommandMap().register(new TestCommand());
        this.getNexus().getPluginManager().registerEvents(new EventListener())
        this.getNexus().getPluginManager().registerEvent(Events.PLUGIN_ENABLE_EVENT, (plugin) => {
        })
        this.getScheduler().scheduleDelayedRepeatingTask(new TestScheduler(), 1000*3)
    }

    onDisable() {
    }
}