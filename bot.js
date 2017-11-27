// Libraries and Crap
const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('./config.json');
const fs = require("fs");

// Total Pets variable
var totalPets = 0;

// Client Bootup
client.on('ready', () => {
 
  console.log("Pa'hl has successfully hacked into the discord mainframe.");
  console.log("Discord's firewall should roll a constitution saving throw.");
 
  // Get Pets
  totalPets = parseInt(conf.pets);
  console.log("\nPa'hl remenisces on the " + totalPets + " pets it has recieved previously.")
 
  // Set Game Value
  client.user.setGame("the part of a discord bot, even though it is not one.");
 
});
 
client.on('message', message => {
     
    // Mess with Kaden
    if (message.guild.members.get(message.author.id).user.username == client.users.find("username", "K1Fire12").username) {

        if ((message.content.includes("fuck")) || (message.content.includes("bitch"))) {

            message.channel.send("Kaden, watch your language!");

        }

    }
  
    // Check if prefix is applied.
    if (message.content.substring(0, 1) == '>') {
 
        // Get Args by using
        var args = message.content.substring(1).split(" ");
        var cmd = args[0];
 
        args = args.splice(1);
 
        switch (cmd.toString().toLowerCase())
        {
            case 'hello':
            
                /*
                Hello Command, without the world.
                Author: Joey
                */
            
                message.channel.send("(Pa'hl, unable to respond verbally, opens his mouth as if he were to squawk like a normal bird.)");
                break;

            case 'roll':
            case 'r':
            
                /*
                Roll Command
                
                Authors: Zach, Devon
                Editors: Thankfully, not Joey.
                
                */
            
                //switch again to roll Advantage, Disadvantage, or something else
                switch (args[0].toLowerCase())
                {
                    //user rolls Advantage
                    case 'advantage' :
                    case 'a' :
                        var roll1 = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
                        var roll2 = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
                        //quick if to give you higher roll
                        if(roll1 >= roll2)
                            message.channel.send("```" + message.guild.members.get(message.author.id).nickname +
                            " rolls Advantage and gets: " + roll1 + ".\n(" + roll1 + " " + roll2 + ")" + "```");
                        else
                            message.channel.send("```" + message.guild.members.get(message.author.id).nickname +
                            " rolls Advantage and gets: " + roll2 + ".\n(" + roll1 + " " + roll2 + ")" + "```");
                        break;

                    //user rolls Disadvantage
                    case 'disadvantage' :
                    case 'd' :
                        var roll1 = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
                        var roll2 = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
                        //quick if to give you lower roll
                        if(roll1 <= roll2)
                            message.channel.send("```" + message.guild.members.get(message.author.id).nickname +
                            " rolls Disdvantage and gets: " + roll1 + ".\n(" + roll1 + " " + roll2 + ")" + "```");
                        else
                            message.channel.send("```" + message.guild.members.get(message.author.id).nickname +
                            " rolls Disdvantage and gets: " + roll2 + ".\n(" + roll1 + " " + roll2 + ")" + "```");
                        break;

                    //users imput is a number of dice
                    default:
                        //Split up xdx to x and x
                        var key = args[0].split("d");
                        var roll = 0;
                        var rollTotal = 0;
                        var rollLog = "";
                        for(var count = 0; count < key[0]; ++count)
                        {
                            roll = Math.floor(Math.random() * (key[1] - 1 + 1) ) + 1;
                            rollTotal = rollTotal + roll;
                            rollLog = rollLog + "+" + roll;
                        }
                        message.channel.send("```" + message.guild.members.get(message.author.id).nickname +
                        " rolls a " + args[0] + " and gets: " + rollTotal + "\n(" + rollLog + ")" + ".```");
                        break;
                    }
                    break;

                case 'quote' :
                
                /*
                The Ungodly Quote Command (Rated M for Mature, Online Experiences not rated by ESRB.)
                Author: Zach
                Editor: Hell naw, I'm not touching this with a ten foot pole.
                */
            
                //create quote array
                var quotes = new Array(
                    "I can fuck anytime I want ~ Kaden as Kynra, Andy\'s Campaign",
                    "I\'m sucking him dry ~ Kaden as Kynra, Andy\'s Campaign",
                    "DRAGON!! ~ Zach as Benjamin, Pirate Campaign",
                    "Tell them to shove the fucking hotwheels up their ass ~ Kaden as Kaden, During Andy\'s Campaign",
                    "What is the constitution of a bed ~ Andy as Armedius, Kaden\'s Campaign",
                    "Can I wake up and practice with my ball? ~ Andy as Armedius, Kaden\'s Campaign",
                    "I know the rate at which you breathe  ~ Devon as Devon, during his campaign",
                    "AUHHHHHHHHHH ~ Deadpool as Virgil, during Devon\'s campaign",
                    "You keep getting peasant boys and you keep abusing them ~ Devon as Devon, during his campaign",
                    "Why don\'t I get to fuck a peasant boy? ~ Kaden as Kaden/Gremory, I\'m not sure, during Devon\'s campaign",
                    "I give her all sorts of food, but she loves you better than me. ~ Kaden as Kaden/Gremory I\'m not sure, during Devon\'s campaign",
                    "When I turn into Jessica Rabbit, I am very persuasive. ~ Andy as Emm, during Devon\'s campaign",
                    "ENLARGE ~ Literally everyone during Devon\'s campaign",
                    "Does he get inside of me? ~ Joey as Steve, during Andy\'s campaign",
                    "I\'m really going to miss being a chicken sandwich. ~ Zach as Zach",
                    "I don\'t even have a fucking armor class for a fucking rock. ~ Kaden during Kaden\'s Campaign",
                    "That\'s called having mass ~ Andy toward Devon as Virgil, because physics > logic",
                    "You\'re dropping dismembered midgets. ~ Devon as Devon, during his campaign",
                    "Andy, you\'re going to get your booty cheeks touched a little. ~ Kaden as Gremory, during Devon\'s Campaign",
                    "FUCK YOU BITCH ~ Kaden as either Kaden or Gremory, towards Sathiera as she gets eaten by slimes in Devon\'s Campaign",
                    "What do you mean \'Mainland\' this IS the mainland - Devon as a dwarf responding to Tyler as Sir Floyd in Devon\'s campaign",
                    "They should have watched it better if they wanted it ~ Kaden during Joey\'s campaign",
                    "They should have fought back harder if they didn't want to die.. - Devon as Devon during Joey\'s campaign",
                    "It\'s cheaper to kill a peasant. ~ Zach as Synd during Devon\'s Campaign (This happens a lot in Devons campaign, doesn\'t it)",
                    "I can run away from the brick wall, so it doesn\'t matter! Zach as Synd in Devon\'s campaign"
                    );
                    //roll a random number for a random quote
                    message.channel.send("```" + quotes[Math.floor(Math.random() * (quotes.length - 1 + 1) )] + ".```");
                    break;

                case 'print' :
            
                    /*
                    Super Secret Print Command
                    Author: Joey
                    */
                    
                    // Check if it will display a thing
                    var willPrint = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;

                    if (willPrint == 20) {
                        
                        // Display a thing
                        message.channel.send("```Compacting into a box, Pa'hl ejects a piece of paper, filled with Dwarven text. If only you spoke dwarven though.```");

                    }

            break;

            case 'help' :
            case 'h' :
            
                /*
                Help Command
                Author: Zach
                */
            
                // Send Help Message
                message.author.send("```" +
                "Pa'hl gives you an angry and squaks silently before suddenly compacting into a box. \n" +
                "Slowly he ejects a piece of paper with the following scripture:\n\n" + 
                "**HELP** \n" +
                " To command me use must use the \">\" character!\n" +
                " Simply place one of the following commands after it:\n" +
                " Help - prints these instructions\n" +
                " Roll - allows you to roll dice\n  add a command such as \"1d20\" or \"Advantage\" after Roll\n" +
                " D&D - allows you to gain access to 5th edition help\n" +
                "```");
                break;

            case 'pet' :

                totalPets += 1;
                
            
                // Check if totalPets is 1 or not.
                if (totalPets == 1) {

                    message.channel.send("```Pa'hl has been petted by " + message.guild.members.get(message.author.id).nickname + ". Pa'hl has been petted " + totalPets + " time.```");

                 } else {

                    message.channel.send("```Pa'hl has been petted by " + message.guild.members.get(message.author.id).nickname + ". Pa'hl has been pet " + totalPets + " times.```");

                }

                // Update and Save Pet Count
                conf.pets = totalPets;
                fs.writeFile("./config.json", JSON.stringify(conf), (err) => console.error);

                console.log("Pa'hl recieved a pet.");

                break;

            case 'd&d'  :
            case 'd' :

                /* 
                D&D Resources Command
                Author: Zach
                Editor: Joey
                */


                // Check if args[0] exists, if it doesn't, add 'help'
                if (args.length < 1) {

                  args[0] = 'help';

                }

                // Arguments Switch for Information
                switch (args[0].toString().toLowerCase())
                {
                    case 'weapons' :
                    case 'weapon' :
                    case 'w' :
                        //Display all weapon info
                        message.channel.send("```" +
                        "**Simple Weapons - Melee**\n" + //display Simple Melee weapons
                        " Club - 1d4 bludgeoning - N/A - light\n" +
                        " Dagger - 1d4 piercing - 20/60 - finesse, light, thrown\n" +
                        " Greatclub - 1d8 bludgeoning - N/A - two-handed\n" +
                        " Handaxe - 1d6 slashing - 20/60 - light, thrown\n" +
                        " Javelin - 1d6 piercing - 30/120 - thrown\n" +
                        " Light hammer - 1d4 bludgeoning - 20/60 - light, thrown\n" +
                        " Mace - 1d6 bludgeoning - N/A - none\n" +
                        " Quarterstaff - 1d6 bludgeoning - versatile(1d8)\n" +
                        " Sickle - 1d4 slashing - N/A - light\n" +
                        " Spear 1d6 piercing - 20/60 - thrown, versatile(1d8)\n" +
                        "\n" + //give extra space between each part

                        "**Simple Weapons - Ranged**\n" + //display Simple Ranged weapons
                        " Crossbow(light) - 1d8 piercing - 80/230 - loading, two-handed\n" +
                        " Dart - 1d4 piercing - 20/60 - finesse, thrown\n" +
                        " Shortbow - 1d6 piercing - 80/320 - two-handed\n" +
                        " Sling - 1d4 bludgeoning - 30/120 - none\n" + "```");

                        message.channel.send("```" + "**Martial Weapons - Melee**\n" + //display Martial Melee weapons
                        " Battleaxe - 1d8 slashing - N/A - versatile(1d10)\n" +
                        " Elven Crescent Blade - 2d6 slashing - N/A - heavy, special, two-handed\n" +
                        " Flail - 1d8 bludgeoning - N/A - none\n" +
                        " Glaive - 1d10 slashing - N/A - heavy, reach, two-handed\n" +
                        " Greataxe - 1d12 slashing - N/A - heavy, two-handed\n" +
                        " Greatsword - 2d6 slashing - N/A - heavy, two-handed\n" +
                        " Halberd - 1d10 slashing - N/A - heavy, reach, two-handed\n" +
                        " Lance - 1d12 piercing - N/A - reach, special\n" +
                        " Longsword - 1d8 slashing - N/A - versatile(1d10)\n" +
                        " Maul - 2d6 bludgeoning - N/A - heavy, two-handed\n" +
                        " Morningstar - 1d8 piercing - N/A - none\n" +
                        " Pike - 1d10 piercing - N/A - heavy, reach, two-handed\n" +
                        " Rapier - 1d8 piercing - N/A - finesse\n" +
                        " Scimitar - 1d6 slashing - N/A - finesse, light\n" +
                        " Shortsword - 1d6 piercing - N/A - finesse, light\n" +
                        " Spiked Chain - 1d8 piercing - N/A - finesse, heavy, reach, special, two-handed\n" +
                        " Trident - 1d6 piercing - 20/60 - thrown, versatile(1d8)\n" +
                        " War pick - 1d8 piercing - N/A - none\n" +
                        " Warhammer - 1d8 bludgeoning - N/A - versatile(1d10)\n" +
                        " Whip - 1d4 slashing - N/A - finesse, reach\n" +
                        " War Scythe - 1d10 slashing - N/A - special, two-handed\n" +
                        "\n" + //give extra space between each part

                        "**Martial Weapons - Ranged**\n" + //display Martial Ranged weapons
                        " Blowgun - 1 piercing - 25/100 - loading\n" +
                        " Crossbow(hand) - 1d6 piercing - 30/120 - light, loading\n" +
                        " Crossbow(heavy) - 1d10 piercing - 100/400 - heavy, loading, two-handed\n" +
                        " Great Bow - 1d8 piercing - 150/600 - heavy, two-handed, special\n" +
                        " Longbow - 1d8 piercing - 150/600 - heavy, two-handed\n" +
                        " Net - N/A - 5/15 - thrown, special\n" +

                        "```");
                        break;

                    case 'armors' :
                    case 'armor' :
                    case 'a' :
                        //Display all armor info
                        message.channel.send("```" +
                        "**Light Armor**\n" + //display light armor
                        " Padded - 11 +Dex Mod - No Str req. - Dis stealth\n" +
                        " Leather - 11 +Dex Mod - No Str req. - Stealth\n" +
                        " Studded Leather - 12 +Dex Mod - No Str req. - Stealth\n" +
                        "\n" + //give extra space between each part

                        "**Medium Armor**\n" + //display light armor
                        " Hide - 12 +Dex Mod (max 2) - No Str req. - Stealth\n" +
                        " Chain Shirt - 13 +Dex Mod (max 2) - No Str req. - Stealth\n" +
                        " Scale Mail - 14 +Dex Mod (max 2) - No Str req. - Dis stealth\n" +
                        " Breastplate - 14 +Dex Mod (max 2) - No Str req. - Stealth\n" +
                        " Half Plate - 15 +Dex Mod (max 2) - No Str req. - Dis stealth\n" +
                        "\n" + //give extra space between each part

                        "**Heavy Armor**\n" + //display light armor
                        " Ring Mail - 14 - No Str req. - Dis stealth\n" +
                        " Chain Mail - 16 - 13 Str req. - Dis stealth\n" +
                        " Splint - 17 - 15 Str req. - Dis stealth\n" +
                        " Plate - 18 - 15 Str req. - Dis stealth\n" +
                        "\n" + //give extra space between each part

                        "**Shield**\n" + //display light armor
                        " Shield - +2 - No Str req. - Stealth\n" +

                        "```");
                        break;

                    case 'packs' :
                    case 'pack' :
                    case 'p' :
                        //Display all Pack info
                        message.channel.send("```" +
                        "**Burglar’s Pack**\n" + //display Burglar’s Pack contents
                        " Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.\n" +
                        "\n" + //give extra space between each part

                        "**Diplomat’s Pack**\n" + //display Diplomat’s Pack contents
                        " Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.\n" + 
                        "\n" + //give extra space between each part

                        "**Dungeoneer’s Pack**\n" + //display Dungeoneer’s Pack contents
                        " Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.\n" + 
                        "\n" + //give extra space between each part

                        "**Entertainer’s Pack**\n" + //display Entertainer’s Pack contents
                        " Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.\n" +
                        "\n" + //give extra space between each part

                        "**Explorer’s Pack**\n" + //display Explorer’s Pack contents
                        " Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.\n" + 
                        "\n" + //give extra space between each part

                        "**Priest’s Pack**\n" + //display Priest’s Pack contents
                        " Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.\n" +
                        "\n" + //give extra space between each part

                        "**Scholar’s Pack**\n" + //display Scholar’s Pack contents
                        " Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife. * You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.\n" + 
                        "\n" + //give extra space between each part

                        "```");
                        break;

                    case 'monsters' :
                    case 'monster' :
                    case 'm' :
                        //Display monster info
                        message.channel.send("```" +
                        "**Monster List**\n" + //display monster list link
                        " https://donjon.bin.sh/5e/monsters/ \n" +
                        "\n" + //give extra space between each part

                        "**Encounter Gen.**\n" + //display monster list link
                        " https://donjon.bin.sh/5e/random \n" +
                        "\n" + //give extra space between each part

                        "```");
                        break;

                    case 'generators' :
                    case 'generator' :
                    case 'gens' :
                    case 'gen' :
                    case 'g' :
                        //Display generator info
                        message.channel.send("```" +
                        "**Donjon**\n" + //display Donjon generators link
                        " https://donjon.bin.sh/ \n" +
                        "\n" + //give extra space between each part

                        "**Chaotic Shiny**\n" + //display Chaotic Shiny generators link
                        " http://chaoticshiny.com/ \n" +
                        "\n" + //give extra space between each part

                        "```");
                        break;

                    case 'classes' :
                    case 'class' :
                    case 'c' :
                        //give the player a list of common classes
                        message.channel.send("```" +
                        "Click here for classes:\n http://engl393-dnd5th.wikia.com/wiki/Classes" +
                        "\n\n Homebrew:\n http://www.dandwiki.com/wiki/5e_Classes" +
                        "```");
                        break;

                    case 'races' :
                    case 'race' :
                    case 'r' :
                        //give the player a list of common races
                        message.channel.send("```" +
                        "Click here for races:\n https://roll20.net/compendium/dnd5e/Index:Races" +
                        "\n\n Homebrew:\n WIKI ERROR - COMING SOON" +
                        "```");
                        break;

                    case 'handbook' :
                    case 'players' :
                    case 'player\'s' :
                    case 'phb' :
                        //Show link to players handbook
                        message.channel.send("```" +
                        "**Player\'s Handbook**\n" + //display Player's Handbook link
                        " [PHB](http://www.elterritorio.org/resources/PH.pdf) \n" +
                        "\n" + //give extra space between each part

                        "```");
                        break;

                    case 'search' :
                    case 's' :
                        //Display search results
                        message.channel.send("```" +
                        "**Wiki Search Results**\n" + //display Wiki Search Result link
                        " http://engl393-dnd5th.wikia.com/wiki/Special:Search?query=" + args[1] + " \n" +
                        "\n" + //give extra space between each part

                        "**Compendium Search Results**\n" + //display Compendium Search Result link
                        " https://roll20.net/compendium/dnd5e/searchbook/?terms=" + args[1] + " \n" +
                        "\n" + //give extra space between each part

                        "**SRD Search Results**\n" + //display SRD Search Result link
                        " https://cse.google.com/cse?q=mage&cx=006680642033474972217%3A1xq0zf2wtvq#gsc.tab=0&gsc.q=" + args[1] + " \n" +
                        "\n" + //give extra space between each part

                        "```");
                        break;

                    case "help":
                    default:
                        //Give the user some example commands
                        message.channel.send("```" +
                        "You've entered an incomplete command! \nMaybe try adding one of the following:\n" +
                        "Weapons\n" +
                        "Armor\n" +
                        "Classes\n" +
                        "Races\n" +
                        "Packs\n" +
                        "Monsters\n" +
                        "Generators\n" +
                        "Handbook\n" +
                        "Or Search" +
                        "```");
                        break;
                    }

                break;


              }
          }
 
});
 
client.login(conf.token);
