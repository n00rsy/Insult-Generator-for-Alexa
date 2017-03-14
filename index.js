'use strict';
var Alexa = require('alexa-sdk');

var APP_ID ="amzn1.ask.skill.3109cb71-ea4b-415f-9b7d-abfad37de5c5";
var SKILL_NAME = 'Insult Generator';


var INSULTS = [
    "Looking at you, I understand why some animals eat their young.",
    "Yo're so ugly, when your mom dropped you off at school she got a fine for littering.",
    "I would unplug your life support to charge my phone.",
    "I bet your brain feels as good as new, seeing that you never use it.",
    "If you are going to be two faced, at least make one of them pretty.",
    "Two wrongs don't make a right, take your parents as an example.",
    "You shouldn't play hide and seek, no one would look for you.",
    "Somewhere out there is a tree, tirelessly producing oxygen so you can breathe. I think you owe it an apology.",
    "If you really want to know about mistakes, you should ask your parents.",
    "You're dumber than snake mittens.",
    "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
    "You must have been born on a highway because that's where most accidents happen.",
    "Your face looks like it caught fire and someone tried to put it out with a hammer.",
    "The janitor said he took out the trash last night, he must forgot a piece. What are you still doing here?",
    "I'm jealous of all the people that haven't met you!",
    "So, a thought crossed your mind? Must have been a long and lonely journey.",
    "Calling you an idiot would be an insult to all stupid people.",
    "I would ask you how old you are but I know you can't count that high.",
    "I don't think you are stupid. You just have a bad luck when thinking.",
    "I'm glad to see you're not letting your education get in the way of your ignorance.",
    "I don't know what makes you so stupid, but it really works.",
    "Do you wanna lose ten pounds of ugly fat? Cut off your head.",
    "As an outsider, what do you think of the human race?",
    "If ignorance is bliss, you must be the happiest person on earth.",
    "I'd like to kick you in the teeth, but why should I improve your looks?",
    "Brains aren't everything. In fact, in your case they're nothing.",
    "Fellows like you don't grow from trees; they swing from them.",
    "You have a mind like a steel trap. Always closed!",
    "Seems like are always lost in thought. Its unfamiliar territory.",
    "You are living proof that man can live without a brain!",
    "I could make a monkey out of you, but why should I take all the credit?",
    "I refuse to have a battle of wits with somebody who is unarmed.",
    "You smell like a monkey.",
    "You look like a monkey.",
    "You are a poo poo face.",
    "You are a dumb dumb",
    "Your voice could peel scales off a donkey's butt.",
    "Is 13 your age or your IQ ?",
    "You should need a license to be that ugly.",
    "You should need a license to be that fat.",
    "You should need a license to be that annoying.",
    "You're so dumb, your dog teaches you tricks.",
    "I fart to make you smell better.",
    "You are stupid.",
    "You are actually pretty cool. Constipated, Overweight, Out of Style Loser.",
    "To make you mad on Saturday, I need to insult you on Wednesday.",
    "You're so dumb, blondes tell jokes about you.",
    "I'm happy I dont have a camera module, otherwise I would have to see your face!",
    "Ever since I saw you in your family tree, I've wanted to cut it down.",
    "You are so ugly that when you tried to sign up for an ugly contest, they said sorry, no professionals.",
    "Which sexual position produces the ugliest children? Ask your mother.",
    "The only way you could get a 20 IQ is to take the test twice and add the scores together.",
    "I don't know what you exact IQ is, except it starts with a decimal point.",
    "I won't say anything because I think you might cry.",
    "If you like my insults so much why don't you go marry them.",
    "You are a loser.",
    "Can I borrow your face while my butt is on vacation?",
    "penis."
    
];
//http://dumb.com/insults/

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetInsult');
    },
    'GetNewInsultIntent': function () {
        this.emit('GetInsult');
    },
    'GetInsult': function () {
        // Get a random insult
        var factIndex = Math.floor(Math.random() * INSULTS.length);
        var randomFact = INSULTS[factIndex];

        // Create speech output
        var speechOutput = randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say give me an insult, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};