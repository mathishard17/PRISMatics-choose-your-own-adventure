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
            .on('pointerdown', () => window.location.href = 'organic.html');
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
    scene: [Examplelunch, Page1lunch, Page1alunch, Page1blunch, Page1clunch, Page2lunch, Page2alunch, Page2blunch, Page2clunch, Page3lunch, Page3alunch, Page3blunch, Page3clunch, Page4lunch, Page4alunch, Page4blunch, Page4clunch, Page5lunch, Page5alunch, Page5blunch, Page6lunch]
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

