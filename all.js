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
    wordWrap: {
        width: 700
    }
};
const xmid = window.innerWidth/2;
class Examplelunch extends Phaser.Scene {
    constructor() {
        super('welcome-scenelunch');
    }

    preload() {}

    create() {
        this.add.text(xmid, 300, 'Welcome to Lunch', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: Rafi Shang', {
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
            .on('pointerdown', () => this.scene.start('Page-1lunch'));
   
    }
}

class Page1lunch extends Phaser.Scene {
    constructor() {
        super('Page-1lunch');
    }
    create() {
        this.add.text(xmid, 200, "Today's lunch menu is broccoli, french fries, string beans, roasted chicken thighs, and Caesar salad. \n You think the lunch is:", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 400, 'Good → You stay in the cafeteria for lunch and enjoy the meal.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-1alunch'));
        const choice1b = this.add.text(xmid, 350, 'Ok, but you want something else → You buy cup noodles from the BOH.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-1blunch'));
        const choice1c = this.add.text(xmid, 300, 'Ok, but you brought lunch from home → You sit and enjoy your homemade meal.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-1clunch'));
   
    }
}
class Page1alunch extends Phaser.Scene {
    constructor() {
        super('Page-1alunch');
    }
    create() {
        this.add.text(xmid, 200, "As you sit down, you notice the roasted chicken thighs are perfectly crispy on the outside and juicy on the inside, \n and the Caesar salad is fresh. \n You start a conversation with the person sitting next to you, Sunny Zhang. \n She tells you she enjoyed AP art and recommends you also take it.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
    const a2 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => a2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => a2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-2lunch'));
   
    }
}
class Page1blunch extends Phaser.Scene {
    constructor() {
        super('Page-1blunch');
    }
    create() {
        this.add.text(xmid, 200, "The cafeteria line is too long, and you’re craving something warm and comforting. You head to the BOH and grab a cup of Nissin chicken-flavored cup noodles. As you pour hot water into the cup, the smell reminds you of memories of reviewing for exams at 2 am. You find a quiet spot at the commons and quickly finish the noodle. Though it’s not the healthiest choice, it helps you prepare for the rest of the day.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const b2 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => b2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => b2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-2lunch'));
   
    }
}
class Page1clunch extends Phaser.Scene {
    constructor() {
        super('Page-1clunch');
    }
    create() {
        this.add.text(xmid, 200, "You open your lunchbox to find your favorite meal: rice, teriyaki chicken, and steamed vegetables. Your mom packed it for you this morning; the first bite brings comfort. While you eat, you notice a classmate looking at your lunch. You offer them a bite, and they’re so impressed they ask for the recipe. You spend the rest of lunch sharing stories about your favorite home-cooked meals.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
    const c2 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => c2.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => c2.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-2lunch'));
   
    }
}
class Page2lunch extends Phaser.Scene {
    constructor() {
        super('Page-2lunch');
    }
    create() {
        this.add.text(xmid, 200, "You feel stressed about an upcoming exam and want to relax during lunch.\n You decide to:", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
       const choice2a = this.add.text(xmid, 300, 'Go for a walk outside → The fresh air helps clear your mind.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-2alunch'));
        const choice2b = this.add.text(xmid, 350, 'Listen to music → You put on your favorite playlist, and feel more relaxed.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-2blunch'));
        const choice2c = this.add.text(xmid, 400, 'Review your notes anyway → You get some extra study time but still feel tense.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-2blunch'));
   
    }
}
class Page2alunch extends Phaser.Scene {
    constructor() {
        super('Page-2alunch');
    }
    create() {
        this.add.text(xmid, 200, "You step outside and feel the cool breeze on your face. The campus is quiet, and you take a leisurely stroll around. As you walk,  you pay attention to the songbirds singing above you. The peaceful surroundings help you forget about the exam for a moment. You take a deep breath and remind yourself that you’ve prepared as much as possible. When you head back, you feel more grounded and ready to face the challenge.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const a3 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => a3.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => a3.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-3lunch'));
    }
}

class Page2blunch extends Phaser.Scene {
    constructor() {
        super('Page-2blunch');
    }
    create() {
        this.add.text(xmid, 200, "You find a cozy corner in the cafeteria, put on your headphones, and press play on your favorite playlist. The melodies and familiar lyrics help you to reach a calmer state of mind. You close your eyes and let the music wash over you, feeling the tension in your shoulders slowly melt away. A classmate waves at you, but you just smile and nod, enjoying this moment of solitude. By the end of lunch, you feel recharged and ready to tackle the rest of the day.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const b3 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => b3.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => b3.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-3lunch'));
    }
}
class Page2clunch extends Phaser.Scene {
    constructor() {
        super('Page-2clunch');
    }
    create() {
        this.add.text(xmid, 200, "You pull out your notes and begin reviewing the material for the exam. The more you read, the more you realize there are a few topics you’re still uncertain about. You try to focus, but the noise in the cafeteria makes it challenging to concentrate. A classmate notices your stressed expression and offers to quiz you. The two of you spend the rest of lunch going over key concepts, and while you feel a bit more prepared, the pressure still lingers.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const c3 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => c3.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => c3.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-3lunch'));
    }
}
class Page3lunch extends Phaser.Scene {
    constructor() {
        super('Page-3lunch');
    }
    create() {
        this.add.text(xmid, 200, "You realize you forgot your homework at the dorm and only have a lunch break to get it. You:", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
       const choice3a = this.add.text(xmid, 300, 'Rush back to the dorm.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-3alunch'));
        const choice3b = this.add.text(xmid, 350, 'Text your roommate → They agree to bring it for you, saving you the trip.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-3blunch'));
        const choice3c = this.add.text(xmid, 400, 'You decide to explain the situation to the teacher after lunch.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-3clunch'));
   
    }
}
class Page3alunch extends Phaser.Scene {
    constructor() {
        super('Page-3alunch');
    }
    create() {
        this.add.text(xmid, 200, "You're out of breath when you reach your room, but you quickly grab the homework from your desk. On your way back, you run into Cynthia, who offers to show you some cute kitten videos. The two of you chat about the upcoming class, and before you know it, you’re back in the cafeteria with minutes to spare.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const a4 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => a4.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => a4.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-4lunch'));
    }
}

class Page3blunch extends Phaser.Scene {
    constructor() {
        super('Page-3blunch');
    }
    create() {
        this.add.text(xmid, 200, "You pull out your phone and quickly text your roommate, explaining the situation. They reply almost immediately, saying they’ll bring it to you. You wait anxiously in the cafeteria, glancing at the clock every few minutes. As you’re about to give up, your roommate arrives with your homework.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const b4 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => b4.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => b4.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-4lunch'));
    }
}
class Page3clunch extends Phaser.Scene {
    constructor() {
        super('Page-3clunch');
    }
    create() {
        this.add.text(xmid, 200, "You experience a wave of panic as you realize there’s no way to submit the homework on time. Taking a deep breath, you decide to be honest with your teacher. During lunch, you practice what you plan to say, trying to remain calm. When class begins, you approach the teacher and explain your situation. To your surprise, they understand and have granted you an extension. You feel a huge weight lifted off your shoulders and vow to be more organized.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const c4 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => c4.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => c4.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-4lunch'));
    }
}
class Page4lunch extends Phaser.Scene {
    constructor() {
        super('Page-4lunch');
    }
    create() {
        this.add.text(xmid, 200, "Your friend invites you to play basketball during lunch break. You:", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
       const choice4a = this.add.text(xmid, 300, 'Agree and play.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-4alunch'));
        const choice4b = this.add.text(xmid, 350, 'Decline and relax.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-4blunch'));
        const choice4c = this.add.text(xmid, 400, 'Go, but only watch.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-4clunch'));
   
    }
}
class Page4alunch extends Phaser.Scene {
    constructor() {
        super('Page-4alunch');
    }
    create() {
        this.add.text(xmid, 200, "You and your friend head to the court to join a pickup game. You sink a few shots and even manage to block your friend’s attempt. By the end of the game, you’re sweaty but smiling, feeling more alive than you have all week. The physical activity clears your mind, and you return to class feeling refreshed.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const a5 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => a5.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => a5.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-5lunch'));
    }
}

class Page4blunch extends Phaser.Scene {
    constructor() {
        super('Page-4blunch');
    }
    create() {
        this.add.text(xmid, 200, "You thank your friend for the invitation but explain that you’re not in the mood to play. Instead, you find a quiet spot under a tree and sit down, enjoying the peace and quiet. You pull out a book you’ve meant to read and lose yourself in the story. The gentle rustling of the leaves and the sun's warmth make it the perfect escape. ", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const b5 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => b5.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => b5.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-5lunch'));
    }
}
class Page4clunch extends Phaser.Scene {
    constructor() {
        super('Page-4clunch');
    }
    create() {
        this.add.text(xmid, 200, "You head to the court with your friend but decide to sit out this time. You find a bench nearby and watch as they play, cheering them on whenever they score. The energy on the court is infectious, and even though you’re not playing, you feel a sense of camaraderie. A few other spectators join you, and you strike up a conversation about the game. It’s a low-key way to spend lunch, and you feel content just being part of the moment.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const c5 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => c5.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => c5.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-5lunch'));
    }
}
class Page5lunch extends Phaser.Scene {
    constructor() {
        super('Page-5lunch');
    }
    create() {
        this.add.text(xmid, 200, "You stayed up late last night and feel super tired. You decide to nap in your dorm. After lying down, you:", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
       const choice5a = this.add.text(xmid, 300, ' Feel sleepy.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-5alunch'));
        const choice5b = this.add.text(xmid, 350, 'Feel bored, so you text your friends.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Page-5blunch'));

   
    }
}
class Page5alunch extends Phaser.Scene {
    constructor() {
        super('Page-5alunch');
    }
    create() {
        this.add.text(xmid, 200, "You drift into a deep sleep as soon as your head hits the pillow. The nap serves as a reset button for your brain, and when you wake up, you feel surprisingly refreshed. You stretch and check the time, realizing you still have a few minutes before class. You quickly grab a snack and head out.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
        const a6 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => a6.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => a6.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-6lunch'));
    }
}

class Page5blunch extends Phaser.Scene {
    constructor() {
        super('Page-5blunch');
    }
    create() {
        this.add.text(xmid, 200, "You chat for a while but don’t feel rested.You pick up your phone and start texting a friend about how tired you are. The conversation quickly turns into a series of funny memes and inside jokes, and before you know it, lunch break is almost over. You didn’t get the rest you needed, but the laughter helps lift your spirits a little.", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
   const a7 = this.add.text(xmid, 400, 'Next Page', buttonSetting)
            .setOrigin(0.5)
            .setInteractive({
                useHandCursor: true
            })
            .on('pointerover', () => a7.setStyle({
                fill: '#ff0'
            }))
            .on('pointerout', () => a7.setStyle({
                fill: '#FFFFFF'
            }))
            .on('pointerdown', () => this.scene.start('Page-6lunch'));
    }
}
class Page6lunch extends Phaser.Scene {
    constructor() {
        super('Page-6lunch');
    }
    create() {
        this.add.text(xmid, 200, "You head back to class, ready for the afternoon session.\n Congratulations, you have successfully completed lunch!", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
                }).setOrigin(0.5);
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
            .on('pointerdown', () => this.scene.start('welcome-scene'));
    }
}

class Example extends Phaser.Scene {
    constructor() {
        super('welcome-scene');
    }

    // preload() {}

    create() {
        this.add.text(xmid, 300, 'ORGANIC CHEM TIME!', textSettingBig).setOrigin(0.5, 0.5);
        const authorText = this.add.text(xmid, 340, 'By: Samuel Zhang', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        // Create the Next button
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
        const onTimeButton = this.add.text(xmid, 350, 'Try to Learn', buttonSetting)
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
        const excuseButton = this.add.text(xmid, 450, 'Doodle!', buttonSetting)
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
        this.add.text(xmid, 200, 'You sit up straight, determined to understand this once and for all. You take notes like your life depends on it. It feels like your brain is running a marathon. (+0.00001 to Chemistry Knowledge, -10 to Sanity) ( move on to the next question).', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 300, 'Next Page', buttonSetting)
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

    }
}
class Page3 extends Phaser.Scene {
    constructor() {
        super('page-3');
    }
    create() {
        this.add.text(xmid, 200, 'Mr. Jones tells you to introduce yourself and say one thing that you like.\n\nYou stand in front of the class and say, "Hi, I am Jordan and I guess…I like math."\n\nA wide smile creeps on Mr. Jones\' face. "Ha, loser" he laughs.\n\nAfterwards, you sit down at an empty seat.', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 300, 'Next Page', buttonSetting)
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
        this.add.text(xmid, 200, 'Now, Mr. Zhang asks a question! Oh no! What do you do now?!?', textSettingSmall).setOrigin(0.5, 0.5);
        const panicButton = this.add.text(xmid, 300, 'Try to Answer', buttonSetting)
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
        const ridiculousButton = this.add.text(xmid, 350, 'Make Up a Ridiculous Answer', buttonSetting)
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
        const curiousButton = this.add.text(xmid, 400, 'Stay Silent and Hope He Moves On', buttonSetting)
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
        const nextPageButton = this.add.text(xmid, 400, 'Next Page', buttonSetting)
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
        const continueButton = this.add.text(xmid, 400, 'Next Page', buttonSetting)
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
        const answerButton = this.add.text(xmid, 300, 'Try Your Best', buttonSetting)
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
        const wrongAnswerButton = this.add.text(xmid, 350, 'Copy From the Smart Kid Next to You', buttonSetting)
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
        const noSolutionButton = this.add.text(xmid, 400, 'Turn It Into Abstract Art ', buttonSetting)
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

    }
}
class Page10 extends Phaser.Scene {
    constructor() {
        super('page-10');
    }
    create() {
        this.add.text(xmid, 200, 'You sneak a Snickers bar out of your bag and take a bite. Mmmhmmm. Suddenly, you feel energized! Mr. Zhang notices, pauses for a second, and says, “Good choice. Snickers fuels the brain.” (+10 to Stamina, +2 to Chemistry Knowledge, +10000 to advertising fee)', textSettingSmall).setOrigin(0.5, 0.5);
        const nextPageButton = this.add.text(xmid, 300, 'Next Page', buttonSetting)
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
        const phoneButton = this.add.text(xmid, 350, 'Start scrolling on your phone', buttonSetting)
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
        const attentionButton = this.add.text(xmid, 400, 'You decide to pay attention.', buttonSetting)
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

class AttentionScene extends Phaser.Scene {
    constructor() {
        super('attention-scene');
    }
    create() {
        this.add.text(xmid, 250, 'You decide that it\'s probably the best idea to pay attention to class now.\nMr. Jones pulls a few more problems from his magic box.\nYou breeze through them. Graphing, solving systems of equations,\ntrigonometry; it\'s all easy for you.\n\nIn between questions, Mr. Jones suddenly says, "Do you guys like LEGOs?"', textSettingSmall).setOrigin(0.5, 0.5);
    }
}
class Page13 extends Phaser.Scene {
    constructor() {
        super('page-13');
    }
    create() {
        this.add.text(xmid, 300, 'You open up your phone and start scrolling Instagram reels.\nYou must hide the phone in your lap and be as discreet as possible.\nSuddenly, you come across the funniest reel you have ever seen.', textSettingSmall).setOrigin(0.5, 0.5);
        const dontShowButton = this.add.text(xmid, 350, 'You don\'t show it to anyone.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('dont-show-scene'));
        const showJonesButton = this.add.text(xmid, 400, 'You show it to Mr. Jones', buttonSetting)
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
        const showReelButton = this.add.text(xmid, 450, 'You show it to the person next to you.', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-14'));
    }
}
class Page14 extends Phaser.Scene {
    constructor() {
        super('page-14');
    }
    create() {
        this.add.text(xmid, 200, 'You manage to sneak a few glances at the answers. You get a 98%. But just as you feel victorious, the principal walks in and catches you. Expelled. Game over.', textSettingSmall).setOrigin(0.5, 0.5);
    }
}
class Page15 extends Phaser.Scene {
    constructor() {
        super('page-15');
    }
    create() {
        this.add.text(xmid, 200, 'You struggle through the quiz, barely finishing before time runs out. You get a 58%. (+2 to Effort, -20 to GPA)', textSettingSmall).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 300, 'Next Page', buttonSetting)
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
        this.add.text(xmid, 200, 'You start drawing elaborate reaction mechanisms that don’t actually make sense but look super scientific. Mr. Zhang stares at your paper, sighs, and writes “Interesting” on top. (+15 to Creativity, -30 to Grade)', textSettingSmall).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 300, 'Next Page', buttonSetting)
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
        this.add.text(xmid, 200, 'You pick up your pen and start doodling random chemistry-related things. Your masterpiece features a benzene ring with little arms and legs. Mr. Zhang walks by, glances at your notebook, and gives you a nod of approval before continuing his lesson. (+5 to Creativity, +0 to Chemistry Knowledge)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 300, 'Continue', buttonSetting)
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
        this.add.text(xmid, 200, 'It\'s the principal. He\'s not happy. You look down at your phone.\nExpelled. Just like that. Game over.', textSettingSmall).setOrigin(0.5, 0.5);
        const startOverButton = this.add.text(xmid, 300, 'Start Over', buttonSetting)
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
        this.add.text(xmid, 200, 'You sit up straight, determined to understand this once and for all. You take notes like your life depends on it. It feels like your brain is running a marathon. (+0.00001 to Chemistry Knowledge, -10 to Sanity)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 300, 'Continue', buttonSetting)
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
        this.add.text(xmid, 300, 'You pick up your pen and start doodling random chemistry-related things. Your masterpiece features a benzene ring with little arms and legs. Mr. Zhang walks by, glances at your notebook, and gives you a nod of approval before continuing his lesson. (+5 to Creativity, +0 to Chemistry Knowledge)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 400, 'Continue', buttonSetting)
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
        this.add.text(xmid, 200, 'You decide to have fun with it. "It\'s obviously alchemical wizardry." The class laughs, even Mr. Zhang cracks a small smile. He shakes his head, amused, and continues teaching. (+5 to Class Clown Status, -3 to Teacher Respect)', textSettingSmall).setOrigin(0.5, 0.5);

        const continueButton = this.add.text(xmid, 300, 'Continue', buttonSetting)
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
        const continueButton = this.add.text(xmid, 320, 'Eat a Snickers Bar', buttonSetting)
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
        const continueButton2 = this.add.text(xmid, 370, 'Drink Some Water', buttonSetting)
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
        const continueButton3 = this.add.text(xmid, 420, 'Close Your Eyes for Just a Second', buttonSetting)
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
        this.add.text(xmid, 200, 'Mr. Zhang looks happy that someone cares. He gives you a long-winded explanation, and by the time you leave, you’re more confused than before. (+10 to Respect, -30 to Sanity)', textSettingSmall).setOrigin(0.5, 0.5);

        const tryAgainButton = this.add.text(xmid, 350, 'Continue', buttonSetting)
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
        this.add.text(xmid, 200, 'You escape. A  day of Organic Chemistry survived! (+1 to Endurance)', textSettingSmall).setOrigin(0.5, 0.5);

        const tryAgainButtonn = this.add.text(xmid, 300, 'Continue', buttonSetting)
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
        const runOutButton = this.add.text(xmid, 350, 'Run Out of the Classroom Like Your Life Depends on It', buttonSetting)
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
        const chatButton = this.add.text(xmid, 400, 'Chat With the Chemistry Team Students', buttonSetting)
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
        this.add.text(xmid, 200, 'Mr. Zhang looks happy that someone cares. He gives you a long-winded explanation, and by the time you leave, you’re more confused than before. (+10 to Respect, -30 to Sanity)', textSettingSmall).setOrigin(0.5, 0.5);

        const tryAgainButton = this.add.text(xmid, 320, 'Continue', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('welcome-scene'));
       
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
            .on('pointerdown', () => this.scene.start('welcome-scene'));
       
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
    scene: [Examplelunch, Page1lunch, Page1alunch, Page1blunch, Page1clunch, Page2lunch, Page2alunch, Page2blunch, Page2clunch, Page3lunch, Page3alunch, Page3blunch, Page3clunch, Page4lunch, Page4alunch, Page4blunch, Page4clunch, Page5lunch, Page5alunch, Page5blunch, Page6lunch, Example, TransitionScene, NextScene, Page1, Page2, Page3Monologue, Page3, Page4, Page5, PanicNextScene, Page6, Page7, Page8, Page9, Page10, Page11, AttentionScene, Page13, Page14, Page17, Page15, ExcuseMeScene, PrincipalScene, RidiculousAnswerScene, TryToLearnScene, DoodleScene, BellRingsScene, Last1, Last2, Last3]
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