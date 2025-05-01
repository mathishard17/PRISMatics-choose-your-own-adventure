const buttonSetting = {
    fontSize: '22px',
    fill: '#FFFFFF',
    backgroundColor: '#444444',
    fontFamily: 'Garamond',
    padding: {
        x: 20,
        y: 10
    },
};

const textSettingBig = {
    fontSize: '32px',
    fill: '#FFFFFF',
    fontFamily: 'Garamond',
};

const textSettingSmall = {
    fontSize: '28px',
    fill: '#FFFFFF',
    fontFamily: 'Garamond',
    align: 'center',
};

const xmid = window.innerWidth/2;

class Example extends Phaser.Scene {
    constructor() {
        super('welcome-scene');
    }

    preload() {}

    create() {
        this.add.text(xmid, 300, 'Welcome to Algebra 2', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: Austin Huang', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        const nextButton = this.add.text(xmid, 400, 'Next', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('next-scene'));
    }
}
class NextScene extends Phaser.Scene {
    constructor() {
        super('next-scene');
    }
    create() {
        this.add.text(xmid, 200, "It's your first class of the day!", {
            fontSize: '28px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond'
        }).setOrigin(0.5, 0.5);
        this.add.text(xmid, 300, 'Do you:', {
            fontSize: '28px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond'
        }).setOrigin(0.5, 0.5);
        const onTimeButton = this.add.text(xmid+100, 350, 'arrive on time', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => onTimeButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => onTimeButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-1'));
        const lateButton = this.add.text(xmid-100, 350, 'arrive late to class', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => lateButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => lateButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-2'));
    }
}
class Page1 extends Phaser.Scene {
    constructor() {
        super('page-1');
    }
    create() {
        this.add.text(xmid, 300, 'You walk to Room 210. Mr. Jones, who is sitting at his desk\nchatting with the class, sees you standing at the doorway.\nHe greets you with a warm "Heyyy!"', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-3'));
    }
}
class Page2 extends Phaser.Scene {
    constructor() {
        super('page-2');
    }
    create() {
        this.add.text(xmid, 300, 'You Arrive late\n\nHeart pounding, you slip through the door of Room 210. Mr. Jones,\nwho is sitting at his desk chatting with the class, immediately stops talking.\nHis gaze locks onto you.\n\n"First day and you are already late, huh? That\'s a pretty good record.\nShould I mark you late? It\'s only a few minutes. Class, what do we think?"\n\nYou gulp. After a moment of deliberation, Mr. Jones presents you with a puzzle.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 470, 'Go to the Puzzle', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-2a'));
    }
}
class Page2a extends Phaser.Scene {
    constructor() {
        super('page-2a');
    }
    
    create() {

        this.add.text(xmid, 200, 'Unscramble this \n(all characters should be lower case, please put spaces between words): crimorntaydk ', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(xmid, 300, 'Type your answer and press Enter:', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        // Create the input text box
        const textInput = this.add.dom(xmid, 350, 'input', {
            type: 'text',
            placeholder: 'Enter your answer here',
            style: 'width: 200px; padding: 8px; font-size: 16px; text-align: center;'
        });

        const scene = this; // Store a reference to the scene

        // Handle the enter key press
        textInput.addListener('keyup');
        textInput.on('keyup', function(event) {
            if (event.key === 'Enter') {
                const userAnswer = event.target.value.toLowerCase().trim();
                if (userAnswer === 'rick and morty') {
                    scene.scene.start('page-2b');
                } else {
                    scene.scene.start('page-10');
                }
            }
        });
    }
}
class Page2b extends Phaser.Scene {
    constructor() {
        super('page-2b');
    }
    create() {
        this.add.text(xmid, 200, 'Mr. Jones looks at for you, and for a moment you are terrified. \n"Correct" he suddenly exclaims. \nYou sigh in relief, you have passed the test.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextButton = this.add.text(xmid, 400, 'Next', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-3'));
    }
}
class Page3 extends Phaser.Scene {
    constructor() {
        super('page-3');
    }
    create() {
        this.add.text(xmid, 200, 'Mr. Jones tells you to introduce yourself and say one thing that you like.\n\nYou stand in front of the class and say, "Hi, I am Jordan and I guess…I like math."\n\nA wide smile creeps on Mr. Jones\' face. "Ha, loser" he laughs.\n\nAfterwards, you sit down at an empty seat.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 500, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('monologue-scene'));
    }
}
class Page3Monologue extends Phaser.Scene {
    constructor() {
        super('monologue-scene');
    }
    create() {
        this.add.text(xmid, 200, 'Suddenly, Mr. Jones springs into a monologue.\n"Welcome to class, welcome to Tuesday. If you haven\'t put your devices away\nand taken out a notebook, I don\'t know what you\'re doing."\n\nThe entire class slowly joins in. As they recite this seemingly rehearsed chant,\na bright light starts shining through cracks forming in the walls of the classroom.\nEveryone harmonizes and increases in volume. You sit bewildered.\n\n"...not the first day of class and it\'s certainly not the last!"\n\nAt this instant, the cracked walls fall apart, revealing a colorful world of\nflowing symbols and numbers. Everyone seems to be floating on an invisible plane,\nfacing Mr. Jones\' magic white board. This is the Math Dimension.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const panicButton = this.add.text(xmid, 460, 'Suddenly, panic grips you. You scream and run for the door.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => panicButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => panicButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-4'));
        const curiousButton = this.add.text(xmid, 520, 'Your curiosity wins out: you stand mesmerized by the glowing runes.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => curiousButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => curiousButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-5'));
    }
}
class Page4 extends Phaser.Scene {
    constructor() {
        super('page-4');
    }
    create() {
        this.add.text(xmid, 300, 'You sprint for the door, letting out a terrified wail. Unfortunately,\nthe ground disappears from under you. You fall helplessly for what\nseems like ages. Waves and numbers spin around you forming a fractal shape,\nand you finally land in Variable Valley.\n\nBefore you, stands a grand expression. AN INTEGRAL.\nYou decide to give it a shot, even though you haven\'t learned calculus.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 500, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('panic-next-scene'));
    }
}
class Page5 extends Phaser.Scene {
    constructor() {
        super('page-5');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones is now clad in wizards\' robes, embroidered with variables and numbers.\nHe notices the fascinated look on your face.\n\nHe says, "This is math, son" and offers no more explanation', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const continueButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => continueButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => continueButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-7'));
    }
}
class Page7 extends Phaser.Scene {
    constructor() {
        super('page-7');
    }
    create() {
        this.add.text(xmid, 250, 'Mr. Jones starts class. First, he conjures up a warm-up question\nusing the symbols floating around him.\n\nHe says, "Your warm-up is…what are the vertical asymptote(s) of\n(2x+2)/(x^2+4x+3)?\nOne minute and twenty-two seconds on the clock."\n\nThis is an interesting question.\nYou think you\'ve done things like this before.\nYou decide to give it a try.', textSettingSmall).setOrigin(0.5, 0.5);
        const answerButton = this.add.text(xmid, 450, 'x = -3', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => answerButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => answerButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-8'));
        const wrongAnswerButton = this.add.text(xmid, 500, 'x = {-3, -1}', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => wrongAnswerButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => wrongAnswerButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-10'));
        const noSolutionButton = this.add.text(xmid, 550, 'No Solution', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => noSolutionButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => noSolutionButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-9'));
    }
}
class Page8 extends Phaser.Scene {
    constructor() {
        super('page-8');
    }
    create() {
        this.add.text(xmid, 300, 'You say, "I got -3."\n\nMr. Jones acknowledges that you got the correct answer.\n"Sweeet!" he exclaims, "That\'s right, you a master."', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-11'));
    }
}
class Page9 extends Phaser.Scene {
    constructor() {
        super('page-9');
    }
    create() {
        this.add.text(xmid, 300, 'In your calculation for the problem, you didn\'t get a solution.\nYou say, "No solution!", hoping that it is correct.\n\nMr. Jones glares at you, searing your retinas with his gaze.\nHe says, "All good math problems have a solution, unlike my second marriage."', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-12'));
    }
}
class Page10 extends Phaser.Scene {
    constructor() {
        super('page-10');
    }
    create() {
        this.add.text(xmid, 300, 'You enthusiastically exclaim your answer. \nMr. Jones stares at you with fire in his eyes.\nHe says, "Close, but wrong."', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-12'));
    }
}
class Page11 extends Phaser.Scene {
    constructor() {
        super('page-11');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones continues with class.\nYou are wondering whether you should slack off in this class.', textSettingSmall).setOrigin(0.5, 0.5);
        const phoneButton = this.add.text(xmid, 380, 'You disregard the "put your devices away" and start scrolling on your phone.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => phoneButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => phoneButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-13'));
        const attentionButton = this.add.text(xmid, 450, 'You decide to pay attention.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => attentionButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => attentionButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-18'));
    }
}
class Page12 extends Phaser.Scene {
    constructor() {
        super('page-12');
    }
    create() {
        this.add.text(xmid, 300, 'Because of your transgression, Mr. Jones now makes you undefined.\nYou are transformed into a 0/0 and you die.', textSettingSmall).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 450, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startOverButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startOverButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class Page18 extends Phaser.Scene {
    constructor() {
        super('page-18');
    }
    create() {
        this.add.text(xmid, 300, 'You decide that it\'s probably the best idea to pay attention to class now.\nMr. Jones pulls a few more problems from his magic box.\nYou breeze through them. Graphing, solving systems of equations,\ntrigonometry; it\'s all easy for you.\n\nIn between questions, Mr. Jones suddenly says, "Do you guys like LEGOs?"', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const noLegosButton = this.add.text(xmid, 425, 'You answer, "No, LEGOs are for nerds"', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => noLegosButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => noLegosButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-19'));

        const yesLegosButton = this.add.text(xmid, 500, 'You answer, "Yes, I build them all the time"', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => yesLegosButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => yesLegosButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-20'));
        const deliciousButton = this.add.text(xmid, 575, 'You answer, "Yes, they are delicious"', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => deliciousButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => deliciousButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-21'));
    }
}
class Page13 extends Phaser.Scene {
    constructor() {
        super('page-13');
    }
    create() {
        this.add.text(xmid, 300, 'You open up your phone and start scrolling Instagram reels.\nYou must hide the phone in your lap and be as discreet as possible.\nSuddenly, you come across the funniest reel you have ever seen.', textSettingSmall).setOrigin(0.5, 0.5);
        const dontShowButton = this.add.text(xmid, 380, 'You don\'t show it to anyone.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => dontShowButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => dontShowButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-14'));
        const showJonesButton = this.add.text(xmid, 450, 'You show it to Mr. Jones', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => showJonesButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => showJonesButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-15'));
        const showReelButton = this.add.text(xmid, 520, 'You show it to the person next to you.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => showReelButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => showReelButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-13-5'));
    }
}
class Page13_5 extends Phaser.Scene {
    constructor() {
        super('page-13-5');
    }
    create() {
        this.add.text(xmid, 300, 'You turn to the kid floating next to you. You say "Dude, this reel is sooo funny."\nHe watches it to the end and laughs. "That\'s so funnyyyy," he says,\ntrying not to laugh too loud. He notices that the reel is about brawl stars\nand asks, "Hey, what\'s your Brawl ID?"', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const brawlIdButton = this.add.text(xmid, 450, 'You tell him your Brawl ID.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => brawlIdButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => brawlIdButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-16'));
        const refuseButton = this.add.text(xmid, 520, 'You refuse to tell him your Brawl ID.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => refuseButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => refuseButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('dont-show-scene'));
    }
}
class Page16 extends Phaser.Scene {
    constructor() {
        super('page-16');
    }
    create() {
        this.add.text(xmid, 300, 'He writes your ID down in his notebook and says,\n"Bet, let\'s hop on later." It seems like you have made a new friend at PRISMS.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-18'));
    }
}
class Page14 extends Phaser.Scene {
    constructor() {
        super('page-14');
    }
    create() {
        this.add.text(xmid, 300, 'You decide to hold in your laugh and keep scrolling.\nYou don\'t pull any mythical reels today. In the middle of one video about skibidi toilet,\nthe class suddenly goes quiet. You look up from your phone to find that\nMr. Jones is right in front of you, staring you down.\n\n"You dare use your phone in my class?" he says menacingly.\n"This ought to teach you!" He waves his arms and turns your phone into a calculator in an instant.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-18'));
    }
}
class Page25 extends Phaser.Scene {
    constructor() {
        super('page-25');
    }
    create() {
        this.add.text(xmid, 300, 'You fail to solve the problem. \n Mr. Jones’ spell fails and the math dimension explodes across space and time. \n Math is entirely destroyed and everyone dies.', {
         fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);

        const startOverButton = this.add.text(xmid, 450, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startOverButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startOverButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class Page15 extends Phaser.Scene {
    constructor() {
        super('page-15');
    }
    create() {
        this.add.text(xmid, 300, 'You interrupt Mr. Jones while he is in the middle of solving a problem.\nEven though his face is one of disdain, he watches the reel the whole way through.\n\nAt the end, he passes judgement, saying,\n"Not only was that not funny, but you interrupted my class for that."\nWith that, he obliterates you on the spot.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 450, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startOverButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startOverButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class Page17 extends Phaser.Scene {
    constructor() {
        super('dont-show-scene');
    }
    create() {
        this.add.text(xmid, 300, 'You say, "No, its ok I don\'t want to give you my ID."\n\nHe is extremely offended. "What?? You don\'t want to play brawl stars with me??\nI LOVE BRAWL STARS!!!" he exclaims.\nWith that, he crushes you under 100 tons of numbers. You die.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 450, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startOverButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startOverButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class Page19 extends Phaser.Scene {
    constructor() {
        super('page-19');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones hears your answer and looks at you with a devious smile.\nHe says, "Whoa, ok, uncultured much?"\nThis line is actually a magic spell that decreases your aura by 100\nand banishes you to the Culture Canyon, where you are stuck for eternity.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 450, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startOverButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startOverButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class Page20 extends Phaser.Scene {
    constructor() {
        super('page-20');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones hears your answer and lights up.\nHe says, "Hell yeah, my apartment is filled with LEGOs. I love building them too."\nWith that, he goes back to teaching.\nHe has a lot of intrusive thoughts, you think.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-22'));
    }
}
class Page21 extends Phaser.Scene {
    constructor() {
        super('page-21');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones hears your answer and a shocked look forms on his face.\nHe immediately replies, "What?? You said they are delicious??"\n\nYou nod sheepishly.\n\nMr. Jones laughs and thinks about what you said.\nHe skeptically says "Okay, as long as you aren\'t eating owls or something."\n\nHe gives you one last weird look before going back to teaching.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-22'));
    }
}
class Page22 extends Phaser.Scene {
    constructor() {
        super('page-22');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones continues going through example problems.\nOne problem he pulls up stumps you completely. You are shocked because\nall the other problems were easy up to this point.\n\nYou look up at Mr. Jones and see that his brow is furrowed and\nhe is staring at the problem intently. Does he not know how to solve the problem either?\n\nThe math dimension shudders almost as if it can\'t solve the problem either.\nYou see a shadowy figure off in the distance.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const shadowButton = this.add.text(xmid, 450, 'You try and get the shadowy figure\'s attention', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => shadowButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => shadowButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-23'));
        const stayQuietButton = this.add.text(xmid, 525, 'You decide to stay quiet', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => stayQuietButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => stayQuietButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-24'));
    }
}
class Page23 extends Phaser.Scene {
    constructor() {
        super('page-23');
    }
    create() {
        this.add.text(xmid, 300, 'You take a closer look at the figure in the distance.\nHe is clad in dark red robes, glowing with energy.\nThe shadow from his hood obscures his face.\nYou call out, "Hey, help me with this question!"\n\nAt an instant, the mysterious man is transported right in front of you.\nYou stare at the spot where he was a second ago, in shock.\nHe says with grandeur, "I am Daniel Zeng, Master Mathematician of the land!\nWhy do you summon me?"\n\nYou explain the question to him. He looks at it for a second, and then closes his eyes.\nWith laser focus, he pulls numbers out of the air without even looking.\nFinally he forms a solution: x = 2.\n\nHe explains the solution to you. It turns out that it wasn\'t as hard as you thought.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 500, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-27'));
    }
}
class Page27 extends Phaser.Scene {
    constructor() {
        super('page-27');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones realizes that class is over now.\nUsing another magic spell, he transforms the math dimension back into Room 210.\n\nHe closes class by saying, "Alright guys your homework is in the textbook.\nRemember, always tip your waitress. Also, only YOU can prevent forest fires."\nIn your mind, you think what does that even mean?\n\nYou pack up your stuff and walk out of the door.\nCongratulations, you have survived this your first class and are ready for announcements!', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 500, 'Continue', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => window.location.href = 'announcementsJ.html');
    }
}
class Page26 extends Phaser.Scene {
    constructor() {
        super('page-26');
    }
    create() {
        this.add.text(xmid, 300, 'You solve the problem, and Mr. Jones’ spell succeeds. \n The dimension goes back to normal, and you realize that the question that you were stumped on \nwasn’t so hard after all. \n Suddenly Mr. Jones realizes that the period is over and the next period started 5 minutes ago. \n He hurriedly transforms the math dimension back into Room 210. \nAs fast as he can, he says, “Alright guys your homework is these problems in the textbook. \nSorry for holding you late. \nSee you next class. Remember, always tip your waitress. Also, only YOU can prevent-” \nYou run out of the classroom before he finishes to get to the next class, \ncompletely bewildered as to what just happened.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
                        align: 'center'

        }).setOrigin(0.5, 0.5);

        const nextPageButton = this.add.text(xmid, 500, 'Continue', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => window.location.href = 'announcementsJ.html');
    }
}
class Page24 extends Phaser.Scene {
    constructor() {
        super('page-24');
    }
    create() {
        this.add.text(xmid, 300, 'As the whole class thinks about the problem, the math dimension is falling apart.\nCracks are forming in reality, and chunks of the world are flying away.\nThe numbers around you start moving in random directions.\n\nMr. Jones immediately activates a magic spell to hold the dimension together.\nHe performs 100 calculations in his head to try to sew the world back together.\nFor the final part of the process, he needs you to help him solve a question\nwhile he works on the other calculations.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextPageButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextPageButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('final-problem'));
    }
}
class FinalProblem extends Phaser.Scene {
    constructor() {
        super('final-problem');
    }
    create() {
        this.add.text(xmid, 300, 'The function ax^2+bx+c has a vertex at (2, -3) and passes through the point (4, 5). \n If the axis of symmetry is x=2, find the sum of a+b+c of the quadratic equation.', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        const almostdone = this.add.text(xmid, 400, '-1', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => almostdone.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => almostdone.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-26'));
        const lmostdone = this.add.text(xmid, 450, '4', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => lmostdone.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => lmostdone.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-25'));
    }
}
class PanicNextScene extends Phaser.Scene {
    constructor() {
        super('panic-next-scene');
    }

    preload() {
        // Preload your image here using Phaser's image loader
        this.load.image('integral', 'integral.jpg'); // Replace with your actual image path
    }

    create() {
        // Placeholder text - you'll want to replace this with actual content
        const img = this.add.image(xmid, 260, 'integral');
        // img.setScale(0.4); 
        img.displayWidth = 420;  
        img.displayHeight = 240;
        this.add.text(xmid, 120, 'The integral looms before you...', textSettingSmall).setOrigin(0.5, 0.5);

        const wrong1 = this.add.text(xmid, 420, 'pi', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => wrong1.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => wrong1.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-10'));
        const wrong2 = this.add.text(xmid, 470, '4.7', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => wrong2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => wrong2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-10'));
        const wrong3 = this.add.text(xmid, 520, 'sqrt(3)', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => wrong3.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => wrong3.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-10'));
        const right = this.add.text(xmid, 570, '(pi)ln(2))', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => right.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => right.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-5'));
    }
}
const container = document.getElementById('renderDiv');
const config = {
    type: Phaser.AUTO,
    parent: 'renderDiv',
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: window.innerWidth,
    height: window.innerHeight,
    dom: {
        createContainer: true // Enables DOM elements in Phaser
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    // make sure to include all scenes
    scene: [Example, NextScene, Page1, Page2, Page2a, Page2b, Page3Monologue, Page3, Page4, Page5, PanicNextScene, Page7, Page8, Page9, Page10, Page12, Page11, Page18, Page13, Page13_5, Page14, Page17, Page15, Page16, Page19, Page20, Page21, Page22, Page23, Page27, Page24, FinalProblem, Page25, Page26]
};

const game = new Phaser.Game(config);


// Resize Event Listener
window.addEventListener('resize', function() {
    const textElement = document.getElementById('dynamic-text');
    game.scale.resize(window.innerWidth, window.innerHeight);
    if (window.innerWidth < 600) {
      textElement.textContent = 'Window is small!';
      textElement.style.fontSize = '16px';
    } else {
      textElement.textContent = 'This text will change when the window is resized or scrolled!';
      textElement.style.fontSize = '20px';
    }
  });
  
  // Scroll Event Listener
  window.addEventListener('scroll', function() {
    const textElement = document.getElementById('dynamic-text');
    
    if (window.scrollY > 100) {
      textElement.textContent = 'You have scrolled down!';
    } else {
      textElement.textContent = 'This text will change when the window is resized or scrolled!';
    }
  });