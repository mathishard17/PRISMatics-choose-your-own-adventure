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
    fontSize: '22px',
    fill: '#FFFFFF',
    fontFamily: 'Garamond',
    align: 'center',
    wordWrap: {
        width: 700
    }
};
const xmid = window.innerWidth/2;
class Example extends Phaser.Scene {
    constructor() {
        super('welcome-scene');
    }

    preload() {}

    create() {
        this.add.text(xmid, 300, 'ORGANIC CHEM TIME!', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: Samuel Zhang', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        const nextButton = this.add.text(xmid, 400, 'woohoo!', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('transition-scene'));
    }
}
class TransitionScene extends Phaser.Scene {
    constructor() {
        super('transition-scene');
    }

    create() {

        // Add the detailed classroom description
        this.add.text(xmid, 250, 'You stepped into the classroom. The clock ticks slowly. The air in Mr. Zhang\'s classroom feels heavy, like everyone\'s brain is overheating. The board is covered in crazy reaction mechanisms, arrows pointing in all directions, making no sense.\n\n The chemistry team students sit there, barely paying attention, already knowing they\'ll ace the next test. Meanwhile, you stare at the board, trying to figure out what on earth is going on with nucleophiles and electrophiles, but it\'s not working.\n\n"Alright, class," Mr. Zhang says in his usual calm voice. "Today, we\'re talking about (&. (%)!*@#)(*)%&*#*)Q#)!. Pretty cool stuff."', textSettingSmall).setOrigin(0.5, 0.5);
        // Continue button
        const continueButton = this.add.text(xmid, 450, 'Continue', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('next-scene'));
    }
}
class NextScene extends Phaser.Scene {
    constructor() {
        super('next-scene');
    }
    create() {
        this.add.text(xmid, 150, "He starts writing. Some students around you pull out their phones. Some are actually paying attention, taking notes and concentrating. Some are watching videos. Some have given up entirely and are just staring into space. Students in the Chemistry team are chatting, doing their own chemistry competition questions. You need to make a choice.", textSettingSmall).setOrigin(0.5, 0.5);
        this.add.text(xmid, 280, 'Do you:', textSettingBig).setOrigin(0.5, 0.5);
        const onTimeButton = this.add.text(xmid, 340, 'Try to Learn', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('try-to-learn-scene'));
        const lateButton = this.add.text(xmid, 400, 'Play Mobile Games', buttonSetting)
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
        const excuseButton = this.add.text(xmid, 460, 'Doodle!', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => excuseButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => excuseButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('doodle-scene'));
    }
}
class Page1 extends Phaser.Scene {
    constructor() {
        super('page-1');
    }
    create() {
        this.add.text(xmid, 300, 'You sit up straight, determined to understand this once and for all. You take notes like your life depends on it. It feels like your brain is running a marathon. (+0.00001 to Chemistry Knowledge, -10 to Sanity) ( move on to the next question).', textSettingSmall).setOrigin(0.5, 0.5);
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
        this.add.text(xmid, 250, ' You pull out your phone and start tapping away. The sounds of chemistry fade into the background as you focus on leveling up. Just when you\'re about to hit a new high score, you hear a voice behind you. \n \"Excuse me!\" \n It’s the principal. He’s not happy. You look down at your phone. Expelled. Just like that. Game over.', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 420, 'Start Over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}

class Page3Monologue extends Phaser.Scene {
    constructor() {
        super('monologue-scene');
    }
    create() {
        this.add.text(xmid, 170, 'Now, Mr. Zhang asks a question! Oh no! What do you do now?!?', textSettingSmall).setOrigin(0.5, 0.5);
        const panicButton = this.add.text(xmid, 460, 'Try to Answer', buttonSetting)
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
        const ridiculousButton = this.add.text(xmid, 520, 'Make Up a Ridiculous Answer', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => ridiculousButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => ridiculousButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('ridiculous-answer-scene'));
        const curiousButton = this.add.text(xmid, 580, 'Stay Silent and Hope He Moves On', buttonSetting)
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
        this.add.text(xmid, 300, 'You take a deep breath and attempt an answer. It’s wrong. The chemistry team students chuckle, and Mr. Zhang gives you an encouraging nod. Meh. At least you tried. (+1 to Courage, -5 to Confidence)', textSettingSmall).setOrigin(0.5, 0.5);
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
            .on('pointerdown', () => this.scene.start('page-6'));
    }
}
class Page5 extends Phaser.Scene {
    constructor() {
        super('page-5');
    }
    create() {
        this.add.text(xmid, 300, 'You stare at your notebook, pretending to be deeply attracted by the chemistry knowledge on your notes. Mr. Zhang moves on. Crisis averted. (+0 to Everything)', textSettingSmall).setOrigin(0.5, 0.5);
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
            .on('pointerdown', () => this.scene.start('page-6'));
    }
}
class Page7 extends Phaser.Scene {
    constructor() {
        super('page-7');
    }
    create() {
        this.add.text(xmid, 220, 'Mr. Zhang hands out a pop quiz. Listing all the elements on the periodic table. What do you do?', textSettingSmall).setOrigin(0.5, 0.5);
        const answerButton = this.add.text(xmid, 450, 'Try Your Best', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-15'));
        const wrongAnswerButton = this.add.text(xmid, 500, 'Copy From the Smart Kid Next to You', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-14'));
        const noSolutionButton = this.add.text(xmid, 550, 'Turn It Into Abstract Art ', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-17'));
    }
}
class Page8 extends Phaser.Scene {
    constructor() {
        super('page-8');
    }
    create() {
        this.add.text(xmid, 300, 'You take a sip from your bottle, hoping it will wake you up. It does nothing.', textSettingSmall).setOrigin(0.5, 0.5);
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
            .on('pointerdown', () => this.scene.start('page-7'));
    }
}
class Page9 extends Phaser.Scene {
    constructor() {
        super('page-9');
    }
    create() {
        this.add.text(xmid, 300, 'Your eyes feel heavy. You rest your head on the desk. Mr. Zhang’s voice becomes a distant hum. You are at peace. Then—you wake up. But something’s off. The classroom looks… old. There’s dust everywhere. The school is empty. You step outside—and realize you’ve slept for decades. Welcome to the future. There’s no going back. (+1 to Mystery, -50 to Understanding)', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 450, 'Start Over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class Page10 extends Phaser.Scene {
    constructor() {
        super('page-10');
    }
    create() {
        this.add.text(xmid, 300, 'You sneak a Snickers bar out of your bag and take a bite. Mmmhmmm. Suddenly, you feel energized! Mr. Zhang notices, pauses for a second, and says, “Good choice. Snickers fuels the brain.” (+10 to Stamina, +2 to Chemistry Knowledge, +10000 to advertising fee)', textSettingSmall).setOrigin(0.5, 0.5);
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
            .on('pointerdown', () => this.scene.start('page-7'));
    }
}
class Page11 extends Phaser.Scene {
    constructor() {
        super('page-11');
    }
    create() {
        this.add.text(xmid, 300, 'Mr. Jones continues with class.\nYou are wondering whether you should slack off in this class.', textSettingSmall).setOrigin(0.5, 0.5);
        const phoneButton = this.add.text(xmid, 380, 'Start scrolling on your phone', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('attention-scene'));
    }
}


class Page14 extends Phaser.Scene {
    constructor() {
        super('page-14');
    }
    create() {
        this.add.text(xmid, 250, 'You manage to sneak a few glances at the answers. You get a 98%. But just as you feel victorious, the principal walks in and catches you. Expelled. Game over.', textSettingSmall).setOrigin(0.5, 0.5);
        const showReelButton = this.add.text(xmid, 430, 'Start Over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class Page15 extends Phaser.Scene {
    constructor() {
        super('page-15');
    }
    create() {
        this.add.text(xmid, 250, 'You struggle through the quiz, barely finishing before time runs out. You get a 58%. (+2 to Effort, -20 to GPA)', textSettingSmall).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('bell-rings-scene'));
    }
}
class Page17 extends Phaser.Scene {
    constructor() {
        super('page-17');
    }
    create() {
        this.add.text(xmid, 250, 'You start drawing elaborate reaction mechanisms that don’t actually make sense but look super scientific. Mr. Zhang stares at your paper, sighs, and writes “Interesting” on top. (+15 to Creativity, -30 to Grade)', textSettingSmall).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 450, 'Next Page', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('bell-rings-scene'));
    }
}
class ExcuseMeScene extends Phaser.Scene {
    constructor() {
        super('excuse-me-scene');
    }
    create() {
        this.add.text(xmid, 250, 'You pick up your pen and start doodling random chemistry-related things. Your masterpiece features a benzene ring with little arms and legs. Mr. Zhang walks by, glances at your notebook, and gives you a nod of approval before continuing his lesson. (+5 to Creativity, +0 to Chemistry Knowledge)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 450, 'Continue', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('principal-scene'));
    }
}
class PrincipalScene extends Phaser.Scene {
    constructor() {
        super('principal-scene');
    }
    create() {
        this.add.text(xmid, 300, 'It\'s the principal. He\'s not happy. You look down at your phone.\nExpelled. Just like that. Game over.', textSettingSmall).setOrigin(0.5, 0.5);
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
class TryToLearnScene extends Phaser.Scene {
    constructor() {
        super('try-to-learn-scene');
    }
    create() {
        this.add.text(xmid, 250, 'You sit up straight, determined to understand this once and for all. You take notes like your life depends on it. It feels like your brain is running a marathon. (+0.00001 to Chemistry Knowledge, -10 to Sanity)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 450, 'Continue', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('monologue-scene'));
    }
}
class DoodleScene extends Phaser.Scene {
    constructor() {
        super('doodle-scene');
    }
    create() {
        this.add.text(xmid, 250, 'You pick up your pen and start doodling random chemistry-related things. Your masterpiece features a benzene ring with little arms and legs. Mr. Zhang walks by, glances at your notebook, and gives you a nod of approval before continuing his lesson. (+5 to Creativity, +0 to Chemistry Knowledge)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 450, 'Continue', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('monologue-scene'));
    }
}
class RidiculousAnswerScene extends Phaser.Scene {
    constructor() {
        super('ridiculous-answer-scene');
    }
    create() {
        this.add.text(xmid, 250, 'You decide to have fun with it. "It\'s obviously alchemical wizardry." The class laughs, even Mr. Zhang cracks a small smile. He shakes his head, amused, and continues teaching. (+5 to Class Clown Status, -3 to Teacher Respect)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 450, 'Continue', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-6'));
    }
}
class Page6 extends Phaser.Scene {
    constructor() {
        super('page-6');
    }
    create() {
        this.add.text(xmid, 250, 'Mr. Zhang keeps talking and talking and talking... and you can not understand anything! You feel your energy dropping. What do you do?', textSettingSmall).setOrigin(0.5, 0.5);
        const continueButton = this.add.text(xmid, 400, 'Eat a Snickers Bar', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-10'));
        const continueButton2 = this.add.text(xmid, 460, 'Drink Some Water', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => continueButton2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => continueButton2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-8'));
        const continueButton3 = this.add.text(xmid, 520, 'Close Your Eyes for Just a Second', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => continueButton3.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => continueButton3.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-9'));
    }

}
class PanicNextScene extends Phaser.Scene {
    constructor() {
        super('panic-next-scene');
    }
    create() {
        // Placeholder text - you'll want to replace this with actual content
        this.add.text(xmid, 250, 'Mr. Zhang looks happy that someone cares. He gives you a long-winded explanation, and by the time you leave, you’re more confused than before. (+10 to Respect, -30 to Sanity)', textSettingSmall).setOrigin(0.5, 0.5);

        const tryAgainButton = this.add.text(xmid, 450, 'Continue', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => tryAgainButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => tryAgainButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class PanicNextScenee extends Phaser.Scene {
    constructor() {
        super('panic-next-scenee');
    }
    create() {
        // Placeholder text - you'll want to replace this with actual content
        this.add.text(xmid, 250, 'You escape. A  day of Organic Chemistry survived! (+1 to Endurance)', textSettingSmall).setOrigin(0.5, 0.5);

        const tryAgainButtonn = this.add.text(xmid, 450, 'Continue', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => tryAgainButtonn.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => tryAgainButtonn.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}
class BellRingsScene extends Phaser.Scene {
    constructor() {
        super('bell-rings-scene');
    }
    create() {
        this.add.text(xmid, 200, 'The Bell Rings, and It\'s Time to Go. What Do You Do?', textSettingSmall).setOrigin(0.5, 0.5);
        const askQuestionButton = this.add.text(xmid, 300, 'Stay Behind to Ask a Question', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => askQuestionButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => askQuestionButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('last-1'));
        const runOutButton = this.add.text(xmid, 370, 'Run Out of the Classroom Like Your Life Depends on It', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => runOutButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => runOutButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('last-2'));
        const chatButton = this.add.text(xmid, 440, 'Chat With the Chemistry Team Students', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => chatButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => chatButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('last-3'));
    }
}
class Last1 extends Phaser.Scene {
    constructor() {
        super('last-1');
    }
    create() {
        // Placeholder text - you'll want to replace this with actual content
        this.add.text(xmid, 250, 'Mr. Zhang looks happy that someone cares. He gives you a long-winded explanation, and by the time you leave, you’re more confused than before. (+10 to Respect, -30 to Sanity)', textSettingSmall).setOrigin(0.5, 0.5);

        const tryAgainButton = this.add.text(xmid, 450, 'Continue', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => tryAgainButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => tryAgainButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => window.location.href = 'modernphysics.html');
    }
}
class Last2 extends Phaser.Scene {
    constructor() {
        super('last-2');
    }
    create() {
        this.add.text(xmid, 200, 'You escape. A day of Organic Chemistry survived. (+1 to Endurance)', textSettingSmall).setOrigin(0.5, 0.5);
        const askQuestionButton = this.add.text(xmid, 300, 'Continue', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => askQuestionButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => askQuestionButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => window.location.href = 'modernphysics.html');
       
    }
}
class Last3 extends Phaser.Scene {
    constructor() {
        super('last-3');
    }
    create() {
        this.add.text(xmid, 200, 'You walk over and try to talk with the chemistry geniuses. One of them mutters, “Not bad for a non-chemist.” You take this as a win. (+5 to Social Status, +2 to Self-Esteem)', textSettingSmall).setOrigin(0.5, 0.5);
        const askQuestionButton = this.add.text(xmid, 300, 'Continue', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => askQuestionButton.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => askQuestionButton.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => window.location.href = 'modernphysics.html');
       
    }
}









// setup!
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
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    // make sure to include all scenes
    scene: [Example, TransitionScene, NextScene, Page1, Page2, Page3Monologue, Page4, Page5, PanicNextScene, Page6, Page7, Page8, Page9, Page10, Page11, Page14, Page17, Page15, ExcuseMeScene, PrincipalScene, RidiculousAnswerScene, TryToLearnScene, DoodleScene, BellRingsScene, Last1, Last2, Last3]
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



