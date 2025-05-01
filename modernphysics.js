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
        this.add.text(xmid, 300, 'Welcome to Modern Physics', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: David Lee', {
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
        this.add.text(xmid, 150, 'Flashback: You feel burned out. It is well past midnight. Just as you are about to jump into bed, a familiar Gmail notification tune hits your ears. Wondering who it might be at this hour, you open your phone with anticipation. No, it is not your mom calling to ask you what your first day at school was like. Neither is it your online friend with her signature past midnight gossip. It is none other than an automated message from Google Classroom: “Due today- Podcast 1. Maxwell’s Equations.”', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 300, 'Listen to the podcast', buttonSetting)
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
        const choice1b = this.add.text(xmid, 350, 'Do not listen to the podcast', buttonSetting)
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
        this.add.text(xmid, 150, 'You do an unprecedented double-turn midair and land on the squeaky chair instead of the bouncy mattress and flip open the laptop. Amidst the rambling, you catch the phrase “Geim’s Frog.” Vaguely remembering the AMC superstar “Kelvin the Frog,” you feel a sudden wave of relaxation overwhelming you. Smiling sheepishly, you close your screen and hop into bed with vague dreams of cheesing through tomorrow’s class. ”', {
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
            .on('pointerdown', () => this.scene.start('page-1aa'));
   
    }
}
class Page1aa extends Phaser.Scene {
    constructor() {
        super('page-1aa');
    }
    create() {
        this.add.text(xmid, 250, 'Back to the present: “So by now all of you should be familiar with Maxwell’s Equations.” Dr. Kirk’s distant voice hits you like a hammer as you absent-mindedly blink away at the whiteboard filled with capital B’s and E’s. Actually, you have been staring at a tiny hole to the right of the whiteboard, through which you seem able to take a glimpse at the movie the Honors Physics Students are enjoying. “Yes!” You did not sense those words escaping your mouth. Even you are taken aback by what you just shouted out loud. All eyes avert to you. But you want to impress your new teacher. “The Gaussian surface is known as a closed surface in three-dimensional space such that the flux of a vector field is calculated. These vector fields can either be the gravitational field or the electric field or the magnetic field.” ', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 550, 'Next', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-1aaa'));
   
    }
}

class Page1aaa extends Phaser.Scene {
    constructor() {
        super('page-1aaa');
    }
    create() {
        this.add.text(xmid, 150, '“Whoa, Leslie! That is true. However I was about to address that topic a bit later in the class. Well. Okay, it seems you are trying to impress me, and I like that attitude. If you are going ahead of class, tell me this: there was a peculiar frog mentioned in the podcast hovering in midair due to electromagnetic forces. Who is this frog?” Of all the abstract questions he could have asked, he gave her the one and only one she could possibly answer! Without hesitation, she yells, almost triumphantly, “Geim’s Frog / Kelvin the Frog!”', {
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
            .on('pointerdown', () => this.scene.start('page-1aaaa'));
   
    }
}
class Page1aaaa extends Phaser.Scene {
    constructor() {
        super('page-1aaaa');
    }
    create() {
        this.add.text(xmid, 200, '“Good job! I did not expect any student to pay attention to such small details. Now here’s a bonus question for you: can you tell us the theory behind Geim’s experiment?” David, a math competition student, bursts out laughing. “Hahaha! Surely not Kelvin the Frog from AIME 1 2016 p13!” And overdriven by the idea of giving you a math competition problem, David jumped from his seat and started copying the problem statement from AOPS, not caring for the fact that the frog’s name was actually Freddy and not Kelvin. Everyone including Dr. Kirk seemed taken aback by this sudden intrusion, but they let David wrap up. Now it is your turn. Heart pounding you approach the board.', {
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
        this.add.text(xmid, 150, 'No one, least of all David expects you to get the 23 recursions and, five minutes later, serenely write the answer 273. Congratulations, you have passed Modern Physics!', {
            fontSize: '20px',
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
            .on('pointerdown', () => window.location.href = 'prismaticsL.html');
   
   
    }
}
class Page1b extends Phaser.Scene {
    constructor() {
        super('page-1b');
    }
    create() {
        this.add.text(xmid, 150, '“Nah, I’m born different.” You have always been a top student. Unlike that other boy who seems to be struggling in the lower classes. The alarm seems to have shaken you, though. You can’t quite fall asleep. So instead you hop onto Tiktok with a VPN on and watch random videos until your eyes are too fatigued to process any more screen light. ', {
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
        this.add.text(xmid, 250, 'Back to the present: “So by now all of you should be familiar with Maxwell’s Equations.” Dr. Kirk’s distant voice hits you like a hammer as you absent-mindedly blink away at the whiteboard filled with capital B’s and E’s. Actually, you have been staring at a tiny hole to the right of the whiteboard, through which you seem able to take a glimpse at the movie the Honors Physics Students are enjoying. ', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const nextButton = this.add.text(xmid, 550, 'Next', buttonSetting)
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
   
    }
}

class Page1bbb extends Phaser.Scene {
    constructor() {
        super('page-1bbb');
    }
    create() {
        this.add.text(xmid, 150, 'Dr. Kirk sharply turns towards you, who have been dozing off. “Leslie, could you remind us of the nature of an electric field generated by a point charge?” Leslie glances at Dr. Kirk’s textbook open on the table and cites, blushing furiously, “It is divergent and uniform, and we can measure its strength at a particular point using Gaussian surfaces.” / Uhh.. what? Dr. Kirk is furious, “How dare you not prepare for class! Get out at once!” ', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choicebruh = this.add.text(xmid, 300, 'Start Over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Example'));
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
    scene: [Example, Page1, Page1a, Page1aa, Page1aaa, Page1aaaa, Page1aaaaa, Page1b, Page1bb, Page1bbb]
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