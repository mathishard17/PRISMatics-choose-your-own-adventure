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
    fontSize: '28px',
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
        this.add.text(xmid, 300, 'Welcome to Honors Chemistry!', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: Maggie Rao', {
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
            .on('pointerdown', () => this.scene.start('Page-05'));
   
    }
}
class Page05 extends Phaser.Scene {
    constructor() {
        super('Page-05');
    }
    create() {
        this.add.text(xmid, 200, '"Hello~~~Welcome to ChemUnity~~~" \nAs you step over the threshold, a voice suddenly pops out. \n The classroom is dark. You try to turn on the overhead light switch, but no matter how much you fiddle with it, the room remains dim, as if the electricity has been cut off."', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 500, 'Next Page', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-1'));
    }
}

class Page1 extends Phaser.Scene {
    constructor() {
        super('Page-1');
    }
    create() {
        this.add.text(xmid, 150, '"You look around in all directions, trying to find the teacher for this class. There is no one but you. \n "I love the environment in this classroom~~~" \n "Hey, please put your phone in the pocket chart on the wall and grab a clicker."\nPocket chart? You think, where is it?"', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 300, 'Put the phone into the sink', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('death-1'));
        const choice1b = this.add.text(xmid, 350, 'Put the phone into the white cupboard where the safety goggles are.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('death-1'));
        const choice1c = this.add.text(xmid, 400, 'Oh no, I don’t have the phone', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice1c.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice1c.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-2'));
   
const choice1d = this.add.text(xmid, 450, 'Put the phone into the holder that hangs next to a fire door.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice1d.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice1d.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-2'));
const choice1e = this.add.text(xmid, 500, 'Throw the phone into the trash can', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice1e.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice1e.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-2'));
   
    }
}
class Death1 extends Phaser.Scene {
    constructor() {
        super('death-1');
    }
    create() {
        this.add.text(xmid, 200, '""What are you doing?" The voice from the speaker suddenly turns piercingly sharp, even somewhat furious. "Someone who has not even read the lab manual properly doesn’t deserve to be in my chemistry class. Now, get out!""', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
const startover = this.add.text(xmid, 300, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startover.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startover.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Example'));
   
    }
}
class Page2 extends Phaser.Scene {
    constructor() {
        super('Page-2');
    }
    create() {
        this.add.text(xmid, 200, '"Congratulations, you have passed the first test." In an instant, the entire laboratory lights up, and the projector hums. A slide gradually appears on the blackboard, showing a man swaying his head while saying, "Welcome to ChemUnity." "Now, find a seat and sit down," the man on the PowerPoint slide says. Since your eyesight has been poor recently, you pull out a chair in the front row and sit directly in front of the man.', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
               const choice1a = this.add.text(xmid, 500, 'Next Page', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-20'));
    }
}
class Page20 extends Phaser.Scene {
    constructor() {
        super('Page-20');
    }
    create() {
        this.add.text(xmid, 150, '"Hmm, very good. I will start the lecture now. Please remember the key points."', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice2a = this.add.text(xmid, 300, 'Take out a notebook and pen, ready to take notes', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice2a.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice2a.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-3'));
        const choice2b = this.add.text(xmid, 350, 'Open your laptop', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice2b.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice2b.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-3'));
        const choice2c = this.add.text(xmid, 400, 'Look at the teacher, waiting for him to continue speaking', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice2c.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice2c.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-3'));
   
const choice2d = this.add.text(xmid, 450, 'Fold a paper airplane using your notebook paper', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice2d.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice2d.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-3'));
const choice2e = this.add.text(xmid, 500, 'Break a beaker', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice2e.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice2e.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('death-2'));
   
    }
}
class Death2 extends Phaser.Scene {
    constructor() {
        super('death-2');
    }
    create() {
        this.add.text(xmid, 200, '"Are you insane? That was my beloved beaker!"', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
const startover = this.add.text(xmid, 300, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startover.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startover.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Example'));
   
    }
}
class Page3 extends Phaser.Scene {
    constructor() {
        super('Page-3');
    }
    create() {
        this.add.text(xmid, 200, '"Alright, don’t get distracted." The little figure on the screen continues speaking."Today, I will introduce the kinetic molecular theory." "As we all know, gas is a matter composed of tiny particles in constant motion, with a lot of distance between the particles." He pauses and looks beyond the screen. You feel a bit awkward and unconsciously reach out, grasping at the air, as if trying to experience the movement of these tiny particles." The first principle: Gases consist of tiny particles of matter that are in variable motion."', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
               const choice1a = this.add.text(xmid, 500, 'Next Page', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-30'));
    }
}
class Page30 extends Phaser.Scene {
    constructor() {
        super('Page-30');
    }
    create() {
        this.add.text(xmid, 150, '"Now, let me test you. What is an ideal gas?"', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice3a = this.add.text(xmid, 300, 'A gas that exactly follows the statements of the kinetic theory.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice3a.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice3a.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Death-3'));
        const choice3b = this.add.text(xmid, 350, 'I hate KMT', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice3b.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice3b.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Death-3'));
        const choice3c = this.add.text(xmid, 400, 'Dr. Weintraub, I don’t know.', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice3c.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice3c.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-4'));
   
    }
}
class Death3 extends Phaser.Scene {
    constructor() {
        super('Death-3');
    }
    create() {
        this.add.text(xmid, 150, '"Huh? Why would you say that? Aren’t you my student?" His expression suddenly turns terrifying. "Gases consist of tiny particles of matter that are in constant motion, not variable motion." Then, just as suddenly, he becomes gentle again. "Forget it. Since this is your first mistake, I’ll give you another chance." "What’s my name?"', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice3a = this.add.text(xmid, 300, 'Dr. Randy', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice3a.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice3a.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Death-30'));
        const choice3b = this.add.text(xmid, 350, 'Mr. Weintraub', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice3b.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice3b.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Death-30'));
    }
}
class Death30 extends Phaser.Scene {
    constructor() {
        super('Death-30');
    }
    create() {
        this.add.text(xmid, 200, 'The teacher’s voice becomes sharp again, and the room temperature suddenly skyrockets. "How could you forget my name, get out of class at once!”', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
const startover = this.add.text(xmid, 300, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startover.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startover.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Example'));
   
    }
}
class Page4 extends Phaser.Scene {
    constructor() {
        super('Page-4');
    }
    create() {
        this.add.text(xmid, 200, '"Hmm, you’re smart. Your vast knowledge has allowed you to realize the issue." The teacher smiles. "I assume you’ve also noticed that gases are in constant motion, not variable motion." "Let’s continue with the theory. The second principle is that gas particles are constantly colliding with each other and the walls of a container. These collisions are elastic; that is, there is no net loss of energy from the collisions." You blink. Suddenly, something new seems to have appeared in the laboratory.', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
               const choice1a = this.add.text(xmid, 500, 'Next Page', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-40'));
    }
}
class Page40 extends Phaser.Scene {
    constructor() {
        super('Page-40');
    }
    create() {
        this.add.text(xmid, 150, '"Which objects in the lab can demonstrate this behavior of gases?" Dr. Weintraub smirks mischievously.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice4a = this.add.text(xmid, 300, 'A balloon floating in the air', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice4a.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice4a.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-5'));
        const choice4b = this.add.text(xmid, 350, 'An ice cube melting in the sink', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice4b.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice4b.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Death-4'));
        const choice4c = this.add.text(xmid, 400, 'An object floating in a small vacuum chamber', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice4c.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice4c.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Death-4'));
   
    }
}
class Death4 extends Phaser.Scene {
    constructor() {
        super('Death-4');
    }
    create() {
        this.add.text(xmid, 200, 'The surroundings suddenly fall into complete silence—even the chirping of birds and the whispering of the wind vanish without a trace. It feels as if the entire world is holding its breath, awaiting an inescapable fate. Just then, a deep, slow ticking sound abruptly begins, like a countdown. You furrow your brows, your heartbeat accelerating—a bomb? You spin around, sprint toward the door, and pound on it desperately, but it remains completely motionless, as if frozen in time by some unseen force. Boom. The balloon floating in midair suddenly bursts. However, instead of a gas leak or an explosion, something far worse occurs—the center of the lab collapses into a deep, dark vortex. A black hole. Your footing falters, and you feel yourself being pulled toward it. Light distorts around you, objects stretch and twist as if time itself is being devoured. Your limbs feel heavy, your steps frozen as though stuck in the fabric of space-time. In that instant, time slows. You watch in horror as your fingers elongate, your body contorting under an unseen force. You are torn apart.', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 620
                }
        }).setOrigin(0.5, 0.5);
const startover = this.add.text(xmid, 500, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startover.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startover.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Example'));
   
    }
}
class Page5 extends Phaser.Scene {
    constructor() {
        super('Page-5');
    }
    create() {
        this.add.text(xmid, 200, '"Hahahaha," the teacher bursts into laughter. "You’re quite an interesting student. I like interesting people and interesting things." His gaze drifts to the wall behind you as if deep in thought. Shhh... He flips to the next slide."This is my favorite pair of glasses. I feel so cool when I wear them." The glasses in the image have a spiral pattern, and in the photo, Dr. Weintraub holds up an Erlenmeyer flask, smiling happily.', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
               const choice1a = this.add.text(xmid, 500, 'Next Page', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-50'));
    }
}
class Page50 extends Phaser.Scene {
    constructor() {
        super('Page-50');
    }
    create() {
        this.add.text(xmid, 150, 'His joy is oddly contagious—you feel a small smile tug at the corners of your mouth. Shhh..', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice5a = this.add.text(xmid, 300, 'Turn around', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice5a.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice5a.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Death-5'));
        const choice5b = this.add.text(xmid, 350, 'Do not turn around', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => choice5b.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => choice5b.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('End'));
        
   
    }
}
class Death5 extends Phaser.Scene {
    constructor() {
        super('Death-5');
    }
    create() {
        this.add.text(xmid, 200, 'You hear a strange noise. Dr. Weintraub is staring past you, his face pale. Your heartbeat quickens. You shouldn’t turn around. But your body betrays you. You turn. You see him. Dr. Elias Mortem stands in the shadows, the eerie blue glow of chemical fire burning in his eye sockets. His lab coat is soaked in an unknown substance, still emitting corrosive fumes. He steps forward slowly. "You shouldn’t have seen me." Before you can react, his cold, chemical-stained hands seize your throat. The liquid seeping from his grip eats away at your flesh, dissolving you from the inside out. Your bones crack apart. He leans in, smiling. "Don’t be afraid. This is scientific progress." Darkness consumes you. You are erased.', {
            fontSize: '22px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
const startover = this.add.text(xmid, 500, 'Start Over', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => startover.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => startover.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Example'));
   
    }
}
class End extends Phaser.Scene {
    constructor() {
        super('End');
    }
    create() {
        this.add.text(xmid, 200, 'A warm hand rests on your shoulder. You turn to see Dr. Weintraub smiling. "Congratulations, you’ve completed today’s lesson." "I look forward to seeing you again."', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const nextButton = this.add.text(xmid, 400, 'Continue', buttonSetting)
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
            .on('pointerdown', () => window.location.href = 'prismaticsJ.html');
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
    scene: [Example, Page05, Page1, Death1, Page2, Page20, Death2, Page3, Page30, Death3, Death30, Page4, Page40, Death4, Page5, Page50, Death5, End]
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