const buttonSetting = {
    fontSize: '24px',
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
    fontSize: '24px',
    fill: '#FFFFFF',
    fontFamily: 'Garamond',
    align: 'center',
};

const xmid = window.innerWidth/2;

class Example extends Phaser.Scene {
    constructor() {
        super('Example');
    }

    preload() {}

    create() {
        this.add.text(xmid, 300, 'It\'s time for Linear Algebra! Go upstairs to 301 for class!', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: Sophia Zhang', {
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
            .on('pointerdown', () => this.scene.start('Page-1'));
   
    }
}


class Page1 extends Phaser.Scene {
    constructor() {
        super('Page-1');
    }
    create() {
        this.add.text(xmid, 150, 'You’re sprinting hard, but the stairs stare down upon you. Hehehe, their evil laughter rumbles at the same beat as your shivers. You try going up two stairs at a time. Thud. You’re back on the first. You try again, going one by one. Kapow! Through the evil laughter, you hear a deep gravelly voice: “The principal can help, the principal can help.” Do you keep trying to make it up the stairs or knock on the principal’s office for help?', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 300, 'Keep trying', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice1a.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice1a.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-1a'));
        const choice1b = this.add.text(xmid, 350, 'Knock on the Principal\'s office', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice1b.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice1b.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-1b'));
        
    }
}
class Page1a extends Phaser.Scene {
    constructor() {
        super('page-1a');
    }
    create() {
        this.add.text(xmid, 200, 'You look around and decide to try one last time. You go up and realize the coefficient of friction seems to grow and grow until… 0. You step onto completely frictionless ice and are flown out by a mysterious impulse causing your momentum to soar, breaking you through the window. But eventually, gravity prevails, landing you in the bushes. But no one notices as you lay there, in a numbing pain. Sparks of yellow and green glow out of the corners of your eyes. Suddenly, you feel a warmth. A whimsical wondrous warmth… of Dr. Kirk’s love for physics. You have at last fallen into Dr. Kirk’s trap of the infinite Max well… where sound cannot escape as you fall faster and faster into darkness… game over.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 400, 'Start over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Example'));
   
    }
}
class Page1aa extends Phaser.Scene {
    constructor() {
        super('page-1aa');
    }
    create() {
        this.add.text(xmid, 200, 'You aren’t that daring after all… you silently leave, making sure your footsteps don’t even squeak on the newly polished wooden floor. The door closes by itself behind you as you sigh. A heavy sigh. So heavy that the floor starts to rumble and crumble and break down. The glowing EXIT sign seems to glow differently: “GIVE ME THE POTION”. You look down at the sticky green candy starting to melt in your hand. Do you give in or do you run?', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 350, 'RUN!', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-1aaaa'));

    const nextButton2 = this.add.text(xmid, 400, 'Give in', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextButton2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextButton2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-1aaa'));
   
    }
}

class Page1aaa extends Phaser.Scene {
    constructor() {
        super('page-1aaa');
    }
    create() {
        this.add.text(xmid, 220, 'Your shaky hand reaches out and a delicate wet rag is handed to you in exchange for the potion. Your eyes are shut, but somehow you can still see the tall vague figure of someone. You grab tightly onto the rag and your hands slip. Free fall. Down stories and stories of nothingness. WHAM! The world becomes so bright and as you adjust your eyes, you realize it’s graduation. You get handed your diploma from Mr. Kemp and as you walk off the stage, you hear your supposed classmate forcefully whisper at you, “It’ll be ok, maybe you’ll get into college next year.” Let me also extend my congratulations to you! Huge congratulations for being the only PRISMS graduate not to have a college to attend and dipping the graduation rate to a low 99.9%.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 420, 'Start Over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Example'));
   
    }
}
class Page1aaaa extends Phaser.Scene {
    constructor() {
        super('page-1aaaa');
    }
    create() {
        this.add.text(xmid, 200, 'Woah there, you are such a jungle tiger risk-taker!! You sprint for the stairs and somehow manage to climb up to the third floor. Your breathing gets faster and faster until you stop. The world stops with you. You look at your watch… 8:02 so you push open the door and hurry into class.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 420, 'Next', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-1aaaaa'));
   
    }
}
class Page1aaaaa extends Phaser.Scene {
    constructor() {
        super('page-1aaaaa');
    }
    create() {
        this.add.text(xmid, 150, '“Hello! Welcome Leslie to Linear Algebra!” Dr. Sood says exuberantly, almost too happy to see you. “I see, you’re already late for your first class.” her sweet smile leaves you feeling a warm fuzzy feeling of…confuzzlement. You look around and the only available spots are the front of the classroom and the one in the very very back, so, which do you choose?', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const nextButton = this.add.text(xmid, 350, 'The Front', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('front1'));
        const nextButton2 = this.add.text(xmid, 400, 'The Back', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextButton2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextButton2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('back'));
   
   
    }
}
class Page1b extends Phaser.Scene {
    constructor() {
        super('page-1b');
    }
    create() {
        this.add.text(xmid, 170, 'Lionhearted Leslie you are! Knock. Knock. You control your knocks to be not too loud but not too soft, yet the knocks seem to echo along the stairwell. KNOCK. KNOCK. KNOCK. KNOCK. The door suddenly jerks open as your pounding heart and the rhythm of the echos form some syncopation. Your fingertips flutter fearfully fast as the reflections off the principal’s glasses almost blind you. \n“Hello! You must be the new student, Leslie! Would you like a piece of candy? These supposedly make all your regrets vanish!” ', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
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
            .on('pointerdown', () => this.scene.start('page-1bb'));
   
    }
}
class Page1bb extends Phaser.Scene {
    constructor() {
        super('page-1bb');
    }
    create() {
        this.add.text(xmid, 200, 'You look at his innocently sly smile and the mysterious jar labeled “Mr. Li’s Potions” on his desk and politely take out a green lollipop labeled “Number Theory.” \n“Sounds delicious!” you say, grinning hesitantly… your stomach growls, reminding you that you’re already twenty minutes late for class. Do you ask Mr. Li about the stairs or not?', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 350, 'Ask Mr. Li', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-1bbb'));
    const nextButton2 = this.add.text(xmid, 400, 'Leave', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => nextButton2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => nextButton2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('page-1aa'));
   
    }
}

class Page1bbb extends Phaser.Scene {
    constructor() {
        super('page-1bbb');
    }
    create() {
        this.add.text(xmid, 150, '“Um, Mr. Li, where’s 301?” A whisper peeks from your mouth. \n “Say that again?”  \n “Where’s 301?” You attempt to force out. \n“LESLIE, it’s your first day here. Are you telling me that you’re late for class!? How dare you! But considering it’s your very first, I’ll give you another chance at this!” And just like that, you’re back at the stairs.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choicebruh = this.add.text(xmid, 300, 'womp womp', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choicebruh.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choicebruh.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-1'));
    }
}

class Front1 extends Phaser.Scene {
    constructor(){
        super('front1');
    }
    create() {
        this.add.text(xmid, 220, 'Oh, so you are ready to be the class pet, huh? You sit at the front and pull out your notebook like any good student. “Um, are you ready for the quiz?” The quiet cute kid next to you whispers in a warm voice. You look at them and blink. Slightly amazed, slightly still in a state of shock after all that happened today.  \n“Huh?” What did you say?” You look into their eyes… they glisten of a puppy’s. The longer you look, the bigger, darker, shinier the eyes become. \n“Leslie! Leslie!” The class clown from behind you shouts. You’re there giggling, maybe even drooling, clueless about anything that’s happening. A gentle hand taps on your shoulder to wake you up from your daydream… A PAW! A PUPPY! You reach out to pet it… oh shoot… that’s no puppy… it’s that cute kid…ohhh that cute cute kid named Neb.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 450, 'Next', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('front2'));
   
    }
}

class Front2 extends Phaser.Scene {
    constructor(){
        super('front2');
    }
    create() {
        this.add.text(xmid, 150, 'There’s 10 minutes left of the quiz you never even knew was happening. You scribble random answers down since you don’t care anymore. You feel it in your beating heart; today’s a special day for you. Though you probably failed that linear algebra quiz, congrats, you have met your soulmate. ', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 350, 'Next', buttonSetting)
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
            .on('pointerdown', () => window.location.href = 'announcementsL.html');
   
    }
}

class Back extends Phaser.Scene {
    constructor(){
        super('back');
    }
    create() {
        this.add.text(xmid, 150, 'Leslie, you’re such a scaredy cat! You go to the very back of the room and lay your head down on the hard, dirty black table. “Ugh,” you groan. ', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 350, 'Next', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('quiz'));
   
    }
}
class Quiz extends Phaser.Scene {
    constructor() {
        super('quiz');
    }
    create() {
        this.add.text(xmid, 150, '“Time for a quiz!” Now you understand the grin on Dr. Sood’s face. You suck at math, and for some reason, your parents forced your class schedule to be that of a super STEM kid, although your own abilities are to sleep and eat. Do you ask to take the quiz another day or do you just take it anyways?', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choicebruh = this.add.text(xmid, 350, 'Postpone', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choicebruh.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choicebruh.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('ppquiz'));
    const choice = this.add.text(xmid, 400, 'Take it', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('takequiz'));
    }
}

class PostponeQuiz extends Phaser.Scene {
    constructor() {
        super('ppquiz');
    }
    create() {
        this.add.text(xmid, 150, 'You ask to postpone the quiz. Too bad, Dr. Sood makes you take it anyway…', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choicebruh = this.add.text(xmid, 350, 'womp womp', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choicebruh.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choicebruh.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('takequiz'));

    }
}

class TakeQuiz extends Phaser.Scene {
    constructor() {
        super('takequiz');
    }
    create() {
        this.add.text(xmid, 150, 'Luckily for you, the quiz is all multiple-choice! Do you choose to guess B, A, D repeatedly or D, A, B repeatedly. ', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choicebruh = this.add.text(xmid, 350, 'BAD', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choicebruh.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choicebruh.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('bad'));
    const choice = this.add.text(xmid, 400, 'DAB', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('dab'));

    }
}

class BAD extends Phaser.Scene {
    constructor() {
        super('bad');
    }
    create() {
        this.add.text(xmid, 150, 'B, A, D, B, A, D, B, A, D… was that a bad choice? Nope, congrats on your first grade of a 100 in linear algebra!', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choicebruh = this.add.text(xmid, 350, 'YAY! CONTINUE', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choicebruh.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choicebruh.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => window.location.href = 'announcementsL.html');


    }
}

class DAB extends Phaser.Scene {
    constructor() {
        super('dab');
    }
    create() {
        this.add.text(xmid, 150, 'The D, A, B’s were a terrible guess! I guess dabbing was just a thing of the past… unfortunately, you have received a 0 as your first grade.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choicebruh = this.add.text(xmid, 350, 'It\'s okay... continue to announcements', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choicebruh.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choicebruh.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => window.location.href = 'announcementsL.html');


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
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    // make sure to include all scenes
    scene: [Example, Page1, Page1a, Page1aa, Page1aaa, Page1aaaa, Page1aaaaa, Page1b, Page1bb, Page1bbb, Front1, Front2, Back, PostponeQuiz, Quiz, DAB, BAD, TakeQuiz]
};

window.phaserGame = new Phaser.Game(config);

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