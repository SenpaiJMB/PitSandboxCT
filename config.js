import {
    @ButtonProperty,
@CheckboxProperty,
Color,
    @ColorProperty,
@PercentSliderProperty,
@SliderProperty,
@SelectorProperty,
@NumberProperty,
@SwitchProperty,
@TextProperty,
@Vigilant,
    } from 'Vigilance';
@Vigilant('PitSandboxPublic', '§dPit Sandbox §5v2.0.0', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General', 'Customization', 'Auto OOF', 'Vanilla HUD Hiding']
        return categories.indexOf(a.name) - categories.indexOf(b.name)
    },
})
class Settings {

    generalInfoHud = new Gui()
    @ButtonProperty({
        name: "Move GUIs",
        placeholder: "Move",
        category: "General",
        subcategory: "!General Info"
    })
    nameTagMove() {
        this.generalInfoHud.open()
    }

    @TextProperty({
        name: "HUD Colors",
        description: "Change the color of the HUD.\n&3Also Accepts chat formatting color codes.",
        category: "Customization",
        placeholder: "§8Example: &f"
    })
    hudTextColor = "";

    @TextProperty({
        name: "HUD Group Colors",
        description: "Change the colors of the Group Titles in the HUD.\n&3Also Accepts chat formatting color codes.",
        category: "Customization",
        placeholder: "§8Example: &e"
    })
    hudGroupColor = "&e";

    @SwitchProperty({
        name: "Custom Guild Messages",
        description: "Enables/Disables the Customly Shortened Guild Messages",
        category: "Customization",
    })
    customGuildChat = true;


    @SwitchProperty({
        name: "Toggle HUD",
        description: "Toggle the HUD at the right side of the screen and streak recap (relog to see changes)",
        category: "General",
        subcategory: "!General Info",
    })
    toggleSandboxHUD = true;

    @SwitchProperty({
        name: "Toggle Simple HUD",
        description: "Toggle the HUD to show less",
        category: "General",
        subcategory: "!General Info",
    })
    toggleSimpleHUD = false;

    @SwitchProperty({
        name: "Toggle Major and Minor Events",
        description: "Toggle Major and Minor Event's from showing in \nthe HUD at the right side of the screen",
        category: "General",
        subcategory: "!General Info",
    })
    toggleMajorandMinorEventHUD = true;

    @SwitchProperty({
        name: "Target Info",
        description: "See a HUD that shows the mystics of the player you're fighting.",
        category: "General",
        subcategory: 'Display'
    })
    targetInfo = true;

    @SwitchProperty({
        name: "Egg Effect Display",
        description: "Display the active egg effects and how long until they expire.",
        category: "General",
        subcategory: 'Display'
    })
    eggEffectDisplay = true;

    @SwitchProperty({
        name: "Remove Particles In Middle",
        description: "Disable rendering particles when in middle.\n&eCan positively impact performance.",
        category: "General",
        subcategory: 'Quality of Life'
    })
    removeParticlesInMid = true;

    @SwitchProperty({
        name: "Lower Render Distance In Middle",
        description: "Lower the render distance when in middle.\n&eCan positively impact performance.",
        category: "General",
        subcategory: 'Quality of Life'
    })
    lowerRenderDistanceInMid = true;

    @SwitchProperty({
        name: "Beacon & Divine Alert",
        description: "Get a title and sound when losing a beacon or getting divine intervention",
        category: "General",
        subcategory: 'Quality of Life'
    })
    toggleBDAlert = true;

    @SwitchProperty({
        name: "Show Ping in Experience Bar",
        description: "Set your experience level to your ping",
        category: "General",
        subcategory: 'Quality of Life'
    })
    showPingInXP = true;

    @SwitchProperty({
        name: "Anti CF",
        description: "Remove every message with /cf.",
        category: "General",
        subcategory: 'Quality of Life'
    })
    antiCF = true;

    @SwitchProperty({
        name: "Hide Stash Messages",
        description: "Hide all stash messages",
        category: "General",
        subcategory: "Messages"
    })
    hideStash = false;

    @SwitchProperty({
        name: "Only personal bounty claims",
        description: "Only show the bounty claim messages that are related to you (you claiming or you getting claimed).",
        category: "General",
        subcategory: 'Messages'
    })
    personalClaims = true;

    @SwitchProperty({
        name: "Remove player damage sounds in middle",
        description: "Remove the sounds of people getting hit while you're in middle.",
        category: "General",
        subcategory: "Sounds"
    })
    removeMidHit = true;

    @SwitchProperty({
        name: "Remove billionaire sounds in middle",
        description: "Remove the sounds of billionaire while you're in middle.",
        category: "General",
        subcategory: "Sounds"
    })
    removeMidBill = true;

    @SwitchProperty({
        name: "Remove bow sounds in middle",
        description: "Remove the sounds of bow shot and land while you're in middle.",
        category: "General",
        subcategory: "Sounds"
    })
    removeMidBow = true

    @SwitchProperty({
        name: "Remove Executioner Sounds in Middle",
        description: "Removes executioner sounds when you are in middle",
        category: "General",
        subcategory: 'Sounds'
    })
    removeExeSounds = true

    @SwitchProperty({
        name: "Remove Gamble Sounds in Middle",
        description: "Removes gamble sounds when you are in middle",
        category: "General",
        subcategory: 'Sounds'
    })
    removeGambleSounds = true

    @SwitchProperty({
        name: "Remove Perun Sounds in Middle",
        description: "Removes perun  sounds when you are in middle",
        category: "General",
        subcategory: 'Sounds'
    })
    removePerunSounds = true

    @SwitchProperty({
        name: "Remove Stun Sounds in Middle",
        description: "Removes stun sounds when you are in middle",
        category: "General",
        subcategory: 'Sounds'
    })
    removeStunSounds = true

    @SwitchProperty({
        name: "Stop rendering entities in spawn when outside",
        description: "Stop rendering all the entities in spawn if you're not in spawn.",
        category: "General",
        subcategory: 'Quality of Life'
    })
    stopRenderSpawn = true;

    @TextProperty({
        name: "Auto chat color",
        description: "Automatically apply a color to your chat messages.\n§eTemporarily disables when unscramble or quick maths is active.\n§cMVP rank is required for this to work, leave blank to disable.\n§cStart a message with \\ to not apply the color.",
        category: "Customization",
        placeholder: "Example: &e"
    })
    chatColor = "";

    @SwitchProperty({
        name: "Guild Passive Sound",
        description: "Play a sound when trying to hit someone in /g passive",
        category: "General",
        subcategory: "Sounds"
    })
    toggleGPassiveSound = true;

    @TextProperty({
        name: "Custom Passive Sound",
        description: "The sound to play when hitting someone in /g passive",
        category: "General",
        subcategory: "Sounds"
    })
    guildPassiveSound = "mob.endermen.hit";

    @TextProperty({
        name: "Custom Passive Pitch",
        description: "The pitch of the sound to play when hitting someone in /g passive",
        category: "General",
        subcategory: "Sounds"
    })
    guildPassivePitch = "1.5";

    @SwitchProperty({
        name: "Guild Message Sound",
        description: "Play a sound when someone types in guild chat.",
        category: "General",
        subcategory: "Sounds"
    })
    toggleGNotification = true;

    @SwitchProperty({
        name: "Toggle Low Health Indicator",
        description: "Makes your screen red when you are low on health",
        category: "General",
        subcategory: 'Quality of Life'
    })
    toggleLowHealthHUD = true;

    @SwitchProperty({
        name: "Pre OOF",
        description: "Prevent /oofing when you are premega",
        category: "General",
        subcategory: 'Quality of Life'
    })
    togglePreOOF = true;

    @SwitchProperty({
        name: "RNGesus Messages",
        description: "Toggle seeing RNGesus messages",
        category: "General",
        subcategory: 'Messages'
    })
    toggleRNGesus = false;

    @SwitchProperty({
        name: "Pre Alert",
        description: "Alerts you when you are not on a megastreak",
        category: "General",
        subcategory: 'Display'
    })
    togglePreAlert = true;

    @SwitchProperty({
        name: "Bounty Bumps",
        description: "See bounty bump messages and sounds",
        category: "General",
        subcategory: "Messages"
    })
    toggleBountyBumps = false;

    @SwitchProperty({
        name: "Megastreak Sounds",
        description: "Hear the wither sound when someone activates a megastreak",
        category: "General",
        subcategory: "Sounds"
    })
    toggleMegastreakSounds = false;

    @SwitchProperty({
        name: "Hide Low /pays",
        description: "Hide received money below a set amount",
        category: "General",
        subcategory: 'Quality of Life'
    })
    hideLowPay = true;

    @SliderProperty({
        name: "Minimum /pay amount",
        description: "Set the minimum amount of money you want to see",
        category: "General",
        subcategory: 'Quality of Life',
        min: 1,
        max: 50000
    })
    minPay = 5000;


    @SliderProperty({
        name: "Mid Radius Amount",
        description: "The radius (in blocks) around 0 0 that counts as mid\n9 is the lantern circle, 20 is the whole middle (hardened clay)\n§cNote: this affects the MID indicator in the Hunt HUD and Lifesteal swapping",
        category: "General",
        subcategory: 'Quality of Life',
        min: 9,
        max: 20
    })
    midRadius = parseInt("15");

    @SwitchProperty({
        name: "Hide Bot Nametags",
        description: "Hide bot nametags for clearer visibility.\n§eCan positively impact performance.",
        category: "General",
        subcategory: 'Quality of Life'
    })
    hideBotNametags = true;

    @SwitchProperty({
        name: "Fish Alert",
        description: "Play a pling sound when a fish bites your hook.",
        category: "General",
        subcategory: "Sounds"
    })
    fishAlert = true;

    @SwitchProperty({
        name: "Toggle Hunger Bar Display",
        description: "Toggle seeing the hunger bar",
        category: "Vanilla HUD Hiding"
    })
    toggleHungerBar = false;

    @SwitchProperty({
        name: "Toggle Armor Bar Display",
        description: "Toggle seeing the armor bar",
        category: "Vanilla HUD Hiding"
    })
    toggleArmorBar = false;

    @SwitchProperty({
        name: "Toggle XP Bar Display",
        description: "Toggle seeing the xp bar",
        category: "Vanilla HUD Hiding"
    })
    toggleXPBar = true;

    @SwitchProperty({
        name: "Toggle Boss Bar Display",
        description: "Toggle seeing the Boss bar",
        category: "Vanilla HUD Hiding"
    })
    toggleBossBar = false;

    @SwitchProperty({
        name: "Custom Auto OOF",
        description: "Customizable auto oof for every megastreak.",
        category: "Auto OOF"
    })
    toggleAutoOOF = false;

    @SwitchProperty({
        name: "Auto OOF On Highlander",
        description: "Automatically /oof on Highlander, if Custom Auto OOF is enabled.",
        category: "Auto OOF"
    })
    autoOOFHighlander = false;

    @SwitchProperty({
        name: "Auto OOF On Overdrive",
        description: "Automatically /oof on Overdrive, if Custom Auto OOF is enabled.",
        category: "Auto OOF"
    })
    autoOOFOverdrive = false;

    @SwitchProperty({
        name: "Auto OOF On 400 Uberstreak",
        description: "Automatically /oof on 400 Uberstreak, if Custom Auto OOF is enabled.",
        category: "Auto OOF"
    })
    autoOOFUber = false;

    @SwitchProperty({
        name: "Auto OOF On 500 Uberstreak",
        description: "Automatically /oof on 500 Uberstreak, if Custom Auto OOF is enabled.\n Mainly used for RNGESUS Begone",
        category: "Auto OOF"
    })
    autoOOFRNGESUS = false;

    @SwitchProperty({
        name: "Auto OOF On Moon",
        description: "Automatically /oof on Moon, if Custom Auto OOF is enabled.",
        category: "Auto OOF"
    })
    autoOOFMoon = false;

    @SwitchProperty({
        name: "Auto OOF On Nightmare",
        description: "Automatically /oof on Nightmare, if Custom Auto OOF is enabled.",
        category: "Auto OOF"
    })
    autoOOFNightmare = true;

    @SwitchProperty({
        name: "Auto OOF On Hermit",
        description: "Automatically /oof on Hermit, if Custom Auto OOF is enabled.",
        category: "Auto OOF"
    })
    autoOOFHermit = false;

    constructor() {
        this.initialize(this);
    }
}

export default new Settings();