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
        this.add.text(xmid, 300, 'Welcome to Announcements!', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: Jessie Wang', {
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
            .on('pointerdown', () => this.scene.start('Page-0'));
   
    }
}
class Page0 extends Phaser.Scene {
    constructor() {
        super('Page-0');
    }
    create() {
        this.add.text(xmid, 200, 'Morning announcements are a tradition in PRISMS.', {
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
        this.add.text(xmid, 200, 'You walk down the stairs as your peers gather in the main hall. You check your watch—it is 9:25. The morning announcements will start in five minutes. It is your first day of school. The first class seems fine, and you’re glad that you survived, but you still have a lot of work to do. You decide to:', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 500, 'Go to the main hall with the others for announcements', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-2'));
            const choice1b = this.add.text(xmid, 400, 'Hide in the bathroom and skip announcements', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-12'));
            
    }
}
class Page2 extends Phaser.Scene {
    constructor() {
        super('Page-2');
    }
    create() {
        this.add.text(xmid, 200, '“Good morning, everyone,” say Mr. Li and Mr. Kemp, the principals. You look around. Many students, familiar and unfamiliar, are gathered in the main hall. Some look energetic, ready to continue their happy day at school. Some look tired. They constantly close their eyes and open them several seconds later. You wonder what they have been through. “Before we start the announcements, I would like to welcome our new student.” Your eyes meet many of the students’ glances, and you hear people talking about you. “Why don’t you say hi to everyone?” You…', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice2a = this.add.text(xmid, 400, 'Consider yourself to be shy, so you just wave and grin at everyone', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-21'));
            const choice2b = this.add.text(xmid, 450, 'Love the community you’re in, and you want to dance to the community', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-22'));
            const choice2c = this.add.text(xmid, 500, 'Are a serious person, so you walk up the stairs and introduce yourself', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-23'));
            
    }
}

class Page21 extends Phaser.Scene {
    constructor() {
        super('Page-21');
    }
    create() {
        this.add.text(xmid, 200, 'You grin at everyone and wave 360 degrees around. It is a bit awkward, but you still feel the warmth from the people around you. Thankfully, it doesn’t last too long, as one of the teachers goes up the stairs, holding three hats in his hand. Morning announcements are a tradition in PRISMS.', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-3'));
   
    }
}
class Page22 extends Phaser.Scene {
    constructor() {
        super('Page-22');
    }
    create() {
        this.add.text(xmid, 200, 'You run to the stairs and stand there. “Hey PRISMS community!” you say. “I’ll introduce myself with a dance!” You dance your favorite TikTok dance on the stairs. Well, you don’t know if the others feel awkward or not, but at least you don’t. You walk down the stairs to everyone’s round of applause (at least you consider it to be) as you see a teacher walking up the stairs, ready to make an announcement.', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-3'));
   
    }
}
class Page23 extends Phaser.Scene {
    constructor() {
        super('Page-23');
    }
    create() {
        this.add.text(xmid, 200, 'You think it is necessary to introduce yourself to everyone, so you walk up the stairs, step steadily, and face the audience. “Hihihi! It’s such a great time meeting everyone.” You walk down the stairs to everyone’s round of applause as you see a teacher walking up the stairs, ready to make an announcement.', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-3'));
   
    }
}
class Page3 extends Phaser.Scene {
    constructor() {
        super('Page-3');
    }
    create() {
        this.add.text(xmid, 200, '“My name is Mr. Jones,” the man says, putting the first hat on his head. “The master of games.” “There will be house games later this week, so participants, please remember to wear your house shirts and be on time. “Second, on my administration hat,” Mr. Jones says, putting on the other hat—well, that hat seems a bit low-key—“Wake up!” You open your eyes—you nearly fall asleep. “What is the best, best, best number in the cafeteria?” Uhhhhh, you have no clue…', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice3a = this.add.text(xmid, 400, 'Remain silent', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-31'));
            const choice3b = this.add.text(xmid, 450, 'Guess 0 ', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-32'));
            const choice3c = this.add.text(xmid, 500, 'Yell 4', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-33'));
            
    }
}
class Page31 extends Phaser.Scene {
    constructor() {
        super('Page-31');
    }
    create() {
        this.add.text(xmid, 200, 'You don’t know. You have no clue. You decide to hide yourself in the crowd and remain silent. After a few seconds, many voices start to say, “Four.” “Let your classmate speak.” Mr. Jones scolds. “But yes, it is 4.”', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-4'));
   
    }
}
class Page32 extends Phaser.Scene {
    constructor() {
        super('Page-32');
    }
    create() {
        this.add.text(xmid, 200, '“0!” you say confidently. Zero is your favorite number, so you believe that it is Mr. Jones’s too. As a math teacher, I agree with you that 0 is a beautiful number,” Mr. Jones replies. “But in the case of the cafeteria, it is 4!” Ohhh… Well, but you still like 0 better.', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-4'));
   
    }
}
class Page33 extends Phaser.Scene {
    constructor() {
        super('Page-33');
    }
    create() {
        this.add.text(xmid, 200, '“4,” someone whispers to you. “4!” you yell out loud, and you see Mr. Jones nodding. “Exactly! It is 4!!!” he yells back.', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-4'));
   
    }
}

class Page4 extends Phaser.Scene {
    constructor() {
        super('Page-4');
    }
    create() {
        this.add.text(xmid, 200, '“There are four chairs at one table. Don’t! Hear me out—don’t have more than or less than four chairs at one table. Don’t, don’t, don’t.” He says it once again. “As always, may the odds be forever in your favor,” he ends after announcing more stuff, but you are too sleepy (and bored) to listen more. You stand in the ballroom for roughly ten more minutes, and at last, the announcements are over. You like the way the community is close-knit together, but you are quite surprised that the school doesn’t have a theater or a large room similar to that. You walk to your next class.', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice4b = this.add.text(xmid, 450, 'Continue', buttonSetting)
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
            .on('pointerdown', () => window.location.href = 'englishL.html');

    }
}
class Page12 extends Phaser.Scene {
    constructor() {
        super('Page-12');
    }
    create() {
        this.add.text(xmid, 200, 'You run to the bathroom, claim a stall, and lock it tight. You open up your phone for a while. You scroll through short videos and your messages. “Where are you?” Thump, thump. The bathroom door opens. You hear that voice—it is familiar. It is one of the teachers at PRISMS that you met before. \n You:', {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice4a = this.add.text(xmid, 400, 'Open your locked door and greet that teacher', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-121'));
            const choice4b = this.add.text(xmid, 450, 'Stand on the toilet so that no one knows you’re inside', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-122'));
    
            
    }
}
class Page121 extends Phaser.Scene {
    constructor() {
        super('Page-121');
    }
    create() {
        this.add.text(xmid, 200, '“Hi.. Hey…” you look at that teacher. “Hi, Mr. White!” “Hi, I’ve been looking for you. It’s morning announcement time,” exclaims Mr. White. “Let’s get back to announcements!', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-2'));
   
    }
}
class Page122 extends Phaser.Scene {
    constructor() {
        super('Page-122');
    }
    create() {
        this.add.text(xmid, 200, 'You stand on the toilet, but you are too tall, and your head reaches out of the stall. You receive Mr. White’s glare. You are pulled to morning announcements.', {
            fontSize: '24px',
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
            .on('pointerdown', () => this.scene.start('Page-2'));
   
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
    scene: [Example, Page0, Page1, Page2, Page21, Page22, Page23, Page3, Page31, Page32, Page33, Page4, Page12, Page121, Page122]
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