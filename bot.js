const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('./config.json')

client.on('ready', () => {

  console.log("Pa'hl has successfully hacked into the discord mainframe.");
  console.log("Discord's firewall should roll a constitution saving throw.");

  client.user.setGame("the part of a discord bot, even though it is not one.");

});

client.on('message', message => {

    // Check if prefix is applied.
    if (message.content.substring(0, 1) == '>') {

        // Get Args by using
        var args = message.content.substring(1).split(" ");
        var cmd = args[0];

        args = args.splice(1);

switch (cmd.toString().toLowerCase())
{
    case 'hello':
        message.channel.send("(Pa'hl, unable to respond verbally, opens his mouth as if he were to squawk like a normal bird.)");
        break;
   
    case 'roll':
    case 'r':
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
                for(count = 0; count < key[0]; ++count)
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

        case 'help' :
        case 'h' :
            message.author.send("```" + "Pa'hl opens his beak as if to squak,\n" +
            "but instead of a squak, he lets out a tremendous REEEEEEE\n\n" +
            "HELP FUNCTIONS DO NOT EXIST YET NORMIE REEEEEEEEEEEEEEEEE"+
            "````");
            break;

        }

    }

});

client.login(conf.token);