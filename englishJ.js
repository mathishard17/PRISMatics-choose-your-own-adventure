const xmid = window.innerWidth/2;
class Introduction extends Phaser.Scene {
    constructor() {
        super('introduction');
    }
    create() {
        const introText = "You open the two large library doors, careful not to make a loud noise. As you walk down the three wooden steps, you hear them creak beneath you. You make your way down to the black tables in the center of the room, and sit on one of the red plastic chairs. As you look up, you see an extremely tall man, wearing a dark blue jumper, and holding a four colored pen in his hand.\n\n\"Welcome to Freshman Year English\" he tells you. \"My name is Mr. White, and I will be your first English teacher at PRISMS. But before we begin our class for today, I'd like to ask, did anyone forget to read and annotate their summer reading, Luka and the Fire of Life?\" You look down at your empty, unannotated book: you've only read 7 pages out of the 217 total.";

        const text = this.add.text(xmid, 200, introText, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add lie button
        const lieButton = this.add.text(xmid, 400, 'Lie and say "I finished the entire book"', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        lieButton.setOrigin(0.5);
        lieButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        lieButton.on('pointerover', () => {
            lieButton.setStyle({
                color: '#cccccc'
            });
        });
        lieButton.on('pointerout', () => {
            lieButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        lieButton.on('pointerdown', () => {
            this.scene.start('page2');
        });
        // Add truth button
        const truthButton = this.add.text(xmid, 450, 'Tell the truth and say "I didn\'t finish reading the book."', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        truthButton.setOrigin(0.5);
        truthButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        truthButton.on('pointerover', () => {
            truthButton.setStyle({
                color: '#cccccc'
            });
        });
        truthButton.on('pointerout', () => {
            truthButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        truthButton.on('pointerdown', () => {
            this.scene.start('page12');
        });
        // Add silence button
        const silenceButton = this.add.text(xmid, 500, 'Don\'t say anything, hope that he doesn\'t call on you.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        silenceButton.setOrigin(0.5);
        silenceButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        silenceButton.on('pointerover', () => {
            silenceButton.setStyle({
                color: '#cccccc'
            });
        });
        silenceButton.on('pointerout', () => {
            silenceButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        silenceButton.on('pointerdown', () => {
            this.scene.start('page13');
        });
    }
}
class Page2 extends Phaser.Scene {
    constructor() {
        super('page2');
    }
    create() {
        const page2Text = "Mr. White looks down at you congenially, and for a moment you feel warm and at ease.\n\n\"I'm glad to hear it! What did you think about Bear the singing dog?\" You haven't read the book, so you have no idea what he's talking about. You grip your sweaty palms tightly, and reply:";
        const text = this.add.text(xmid, 150, page2Text, {
            fontFamily: 'Garamond',
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add Bear button
        const bearButton = this.add.text(xmid, 300, '"Ahhh yes Bear. Bear transcends the traditional role of a mere companion, becoming a multifaceted symbol of innocence and wisdom, embodying the tenuous intersection between human consciousness and animal instinct."', {
            fontFamily: 'Garamond',
            fontSize: '16px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            },
            wordWrap: {
                width: 600
            },
            align: 'center'
        });
        bearButton.setOrigin(0.5);
        bearButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        bearButton.on('pointerover', () => {
            bearButton.setStyle({
                color: '#cccccc'
            });
        });
        bearButton.on('pointerout', () => {
            bearButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        bearButton.on('pointerdown', () => {
            this.scene.start('page8');
        });
        // Add trick question button
        const trickButton = this.add.text(xmid, 370, '"It\'s a trick question!"', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        trickButton.setOrigin(0.5);
        trickButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        trickButton.on('pointerover', () => {
            trickButton.setStyle({
                color: '#cccccc'
            });
        });
        trickButton.on('pointerout', () => {
            trickButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        trickButton.on('pointerdown', () => {
            this.scene.start('page3');
        });
        // Add confess button
        const confessButton = this.add.text(xmid, 440, 'You decide to tell the truth and say, "Mr. White, I didn\'t do the reading."', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            },
            wordWrap: {
                width: 600
            },
            align: 'center'
        });
        confessButton.setOrigin(0.5);
        confessButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        confessButton.on('pointerover', () => {
            confessButton.setStyle({
                color: '#cccccc'
            });
        });
        confessButton.on('pointerout', () => {
            confessButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        confessButton.on('pointerdown', () => {
            this.scene.start('page9');
        });
    }
}
class Page13 extends Phaser.Scene {
    constructor() {
        super('page13');
    }
    create() {
        const page13Text = "Some loser raises their hand and says, \"I read it! My favorite character was Bear, who transcends the traditional role of a mere companion, becoming a multifaceted symbol of innocence and wisdom, embodying the tenuous intersection between human consciousness and animal instinct.\" Dang you think. What a loser. But luckily for you, his monologue pacifies Mr. White. He moves on without calling on you, and the lesson proceeds.";
        const text = this.add.text(xmid, 300, page13Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page14');
        });
    }
}
class Page24 extends Phaser.Scene {
    constructor() {
        super('page-24');
    }
    create() {
        const page24Text = "Ten minutes later, Mr. White is done talking about the Trevor Ragan podcast, and honestly you’re grateful for the break. You’re allowed to walk around the classroom and interact with your fellow classmates, but your classmates are kind of boring, so instead you decide to talk to Mr. White. You chat away with him for a few minutes, until he asks in a deceptively casual voice, “Hey, what’s your favorite club?”";
        const text = this.add.text(xmid, 300, page24Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const a24 = this.add.text(xmid, 450, 'You respond “PRISMatics.”', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        a24.setOrigin(0.5);
        a24.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        a24.on('pointerover', () => {
            a24.setStyle({
                color: '#cccccc'
            });
        });
        a24.on('pointerout', () => {
            a24.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        a24.on('pointerdown', () => {
            this.scene.start('page-30');
        });
            const b30 = this.add.text(xmid, 500, 'You respond “AVC.”', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        b30.setOrigin(0.5);
        b30.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        b30.on('pointerover', () => {
            b30.setStyle({
                color: '#cccccc'
            });
        });
        b30.on('pointerout', () => {
            b30.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        b30.on('pointerdown', () => {
            this.scene.start('page-25');
        });
        const c30 = this.add.text(xmid, 550, 'You respond “All clubs are equally awesome!”', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        c30.setOrigin(0.5);
        c30.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        c30.on('pointerover', () => {
            c30.setStyle({
                color: '#cccccc'
            });
        });
        c30.on('pointerout', () => {
            c30.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        c30.on('pointerdown', () => {
            this.scene.start('page-26');
        });
    }
}
class Page12 extends Phaser.Scene {
    constructor() {
        super('page12');
    }
    create() {
        const page12Text = "You tell Mr. White the truth. Mr. White tilts his neck slightly, and for a second you think you see a faint, imperceptible smile. He looks down at you sternly, as he chastises you, \"Well. I expected better from you, you seem like such a responsible person. I can't say I'm not disappointed.\" He pauses for a second, and lets you bear the weight of his words. \"That being said, it takes courage to admit your wrongdoings, and it takes even more courage to not make excuses for them. I cannot let you off the hook, but I will give you the opportunity to rectify this transgression. You will receive a one week extension for this assignment. Do not disappoint me again.\"";
        const text = this.add.text(xmid, 300, page12Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page14');
        });
    }
}
class Page25 extends Phaser.Scene {
    constructor() {
        super('page-25');
    }
    create() {
        const page25Text = "After the words come out of your mouth you immediately regret it. After all, Mr. White is the head of PRISMatics and you’ve signed up for his club. Mr. White’s gaze hardens. \"AVC?\" he repeats. “Well, I can’t lie, they are pretty awesome.” You heave a sigh of relief. Outside the classroom, unbeknownst to you, Diya and Sophia are outside eavesdropping, and they are not impressed with your answer. ";
        const text = this.add.text(xmid, 300, page25Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page-27');
        });
    }
}
class Page26 extends Phaser.Scene {
    constructor() {
        super('page-26');
    }
    create() {
        const page26Text = "After the words come out of your mouth you immediately regret it. After all, Mr. White is the head of PRISMatics and you’ve signed up for his club. Mr. White’s gaze hardens. \"They’re all equal?” he repeats. “Well, I can’t lie, all the PRISMS clubs are pretty awesome.” You heave a sigh of relief. Outside the classroom, unbeknownst to you, Diya and Sophia are outside eavesdropping, and they are not impressed with your answer. ";
        const text = this.add.text(xmid, 300, page26Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page-27');
        });
    }
}
class Page8 extends Phaser.Scene {
    constructor() {
        super('page8');
    }
    create() {
        const page8Text = "You repeat your contrived bogus to Mr. White, hoping to accidentally stumble on the truth. When you finish, Mr. White looks at you with a puzzled expression on his face. \"Wow\" he exclaims, \"I really thought you were lying, but I guess you really did read the book.\" You pause, and heave a sigh. Mr. White does not suspect you, and class proceeds as normal.";
        const text = this.add.text(xmid, 300, page8Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page14');
        });
    }
}
class Page3 extends Phaser.Scene {
    constructor() {
        super('page3');
    }
    create() {
        const page3Text = "Mr. White glares at you furiously, his eyes ablaze with anger. \"How dare you try to trick me! Do you think I'm stupid?!\" His voice echoes through the room, sharp and cold. As his fury grows, the air around him ripples, and a swirling black hole materializes beside him, surrounded by ghostly grey winds. The vortex expands, spinning faster; slowly, colors begin to bleed into the void—hues of lavender and pink, shimmering gold, and shadows that twist like living smoke. An image forms within the swirling chaos, revealing a world unlike anything you've ever seen. The sky is painted with swirling pastels, trees with curling branches whisper ancient secrets, and the ground pulses as though the earth itself is alive. You feel a chill crawl down your spine.";
        const text = this.add.text(xmid, 300, page3Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add continue button
        const continueButton = this.add.text(xmid, 500, 'Continue', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        continueButton.setOrigin(0.5);
        continueButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        continueButton.on('pointerover', () => {
            continueButton.setStyle({
                color: '#cccccc'
            });
        });
        continueButton.on('pointerout', () => {
            continueButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        continueButton.on('pointerdown', () => {
            this.scene.start('page4');
        });
    }
}
class Page9 extends Phaser.Scene {
    constructor() {
        super('page9');
    }
    create() {
        const page9Text = "Mr. White looks at you strangely, then smiles and replies \"I know.\" You start stammering, but before you can work out a suitable answer, Mr. White says, \"Had you come clean earlier, you would have been forgiven, but because of your initial cowardice, you will have to prove that you deserve a second chance.\" He pauses for a second, and then continues, \"If you can prove that you are well versed in the members of the PRISMS community, then I will let you continue as a member of it. If not, you will be expelled.\" You nod, grateful for the second chance.";
        const text = this.add.text(xmid, 300, page9Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('guessTheTeacher');
        });
    }
}
class Page4 extends Phaser.Scene {
    constructor() {
        super('page4');
    }
    create() {
        const page4Text = "Without warning, Mr. White grabs your arm and pulls you out of your seat, his grip cold and unyielding. He beckons you towards the menacing portal, and something about the look in his eyes tells you to comply. \"Consider yourself lucky that I am a benevolent man,\" he says. \"I will give you a chance to redeem yourself. This world you see is the setting of Luca and the Fire of Life.\" His voice softens, but his gaze remains fierce. \"To return to our class, you must choose wisely.\"\n\nBefore you can protest, he pushes you through the portal. The world spins around you as you fall, colors and shadows swirling together. The wind roars in your ears, and you body feels light, weightless really.\n\nYou hit the ground hard, the air knocked out of your lungs. As you struggle to your feet, you realize you are no longer yourself. Your hands are smaller, your clothes different—simple yet sturdy, fit for a young adventurer. You are Luca now, and this is his world. The world of the Fire of Life.";
        const text = this.add.text(xmid, 250, page4Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page5');
        });
    }
}
class Page5 extends Phaser.Scene {
    constructor() {
        super('page5');
    }
    create() {
        const page5Text = "You stand at the edge of the Shadowed Forest, where the air is cold and thick with whispers. The trees loom like giants, their twisted branches clawing at the sky, their shadows swirling like living smoke. Beyond this ominous wood lies the Valley of Echoes, where the first spark of the Fire of Life waits, guarded by ancient spirits who hunger for courage—and fear.\n\nA low growl rumbles from within the forest, followed by a flicker of crimson eyes. In your chest, you feel the weight of a fading heartbeat—a heartbeat that does not belong to you but to Luca's father, whose life slips away with each passing moment. Time is slipping away.\n\nThe sky darkens, and the wind howls, carrying a voice that echoes in your mind: \"Face the darkness and the flame shall be yours… or flee and lose all you hold dear.\" You realize now that this is the challenge Mr. White spoke of. Your chance at redemption lies beyond the shadows.";
        const text = this.add.text(xmid, 200, page5Text, {
            fontFamily: 'Garamond',
            fontSize: '16px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add charge button
        const chargeButton = this.add.text(xmid, 450, 'Clench your fists and charge into the Shadowed Forest', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        chargeButton.setOrigin(0.5);
        chargeButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        chargeButton.on('pointerover', () => {
            chargeButton.setStyle({
                color: '#cccccc'
            });
        });
        chargeButton.on('pointerout', () => {
            chargeButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        chargeButton.on('pointerdown', () => {
            this.scene.start('page6');
        });
        // Add spirit button
        const spiritButton = this.add.text(xmid, 500, 'Call out to the spirits, demanding they face you here and now', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        spiritButton.setOrigin(0.5);
        spiritButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        spiritButton.on('pointerover', () => {
            spiritButton.setStyle({
                color: '#cccccc'
            });
        });
        spiritButton.on('pointerout', () => {
            spiritButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        spiritButton.on('pointerdown', () => {
            this.scene.start('page7');
        });
        // Add climb button
        const climbButton = this.add.text(xmid, 550, 'Seek a way to outsmart the darkness by climbing the ancient cliffs', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        climbButton.setOrigin(0.5);
        climbButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        climbButton.on('pointerover', () => {
            climbButton.setStyle({
                color: '#cccccc'
            });
        });
        climbButton.on('pointerout', () => {
            climbButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        climbButton.on('pointerdown', () => {
            this.scene.start('page7');
        });
    }
}
class Page6 extends Phaser.Scene {
    constructor() {
        super('page6');
    }
    create() {
        const page6Text = "You close your eyes, bracing yourself to enter the Shadowed Forest. However, in its place, you find a smiling Mr. White, standing in the midst of the English classroom. He pats you on the back and says, \"Well done. What you did took bravery. You are forgiven for your past transgressions.\" And with that, class proceeds as if nothing had happened.";
        const text = this.add.text(xmid, 300, page6Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page14');
        });
    }
}
class Page7 extends Phaser.Scene {
    constructor() {
        super('page7');
    }
    create() {
        const page7Text = "You close your eyes, bracing yourself for the challenge ahead. However, in its place, you find a frowning Mr. White. \"You have chosen incorrectly\" he bellows, \"Luca shows the path of courage: to charge into the Shadowed Forest. You have not redeemed yourself, and you will remain in this realm for eternity.\" And with that, you find yourself stuck in this magical new world, unable to escape and doomed for eternity.";
        const text = this.add.text(xmid, 300, page7Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add start over button
        const startOverButton = this.add.text(xmid, 500, 'Start Over', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        startOverButton.setOrigin(0.5);
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                color: '#cccccc'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        startOverButton.on('pointerdown', () => {
            this.scene.start('main');
        });
    }
}
class Page14 extends Phaser.Scene {
    constructor() {
        super('page14');
    }
    create() {
        const page14Text = "Mr. White's voice drones on, something about a podcast by some guy named Trevor. You catch snippets about jungle tigers, but your mind is heavy with exhaustion. Your eyelids grow heavy, and before you know it, you are fast asleep.\n\nYou wake with a jolt, heart racing, only to find Mr. White towering over your desk. His arms are crossed tightly. \"Sleeping in my class? Unacceptable,\" he growls. The room grows colder, then suddenly, the floor beneath you vanishes.";
        const text = this.add.text(xmid, 300, page14Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page15');
        });
    }
}
class GuessTheTeacher extends Phaser.Scene {
    constructor() {
        super('guessTheTeacher');
    }
    create() {
        const guessText = "Guess who this teacher is:\nThis person is heavily involved in one of our school sports.\nThis person lived in Spain.\nIn college, this person was the Highest-Ranked Student in the School in their subject.";
        const text = this.add.text(xmid, 300, guessText, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add Dr. Kirk button
        const kirkButton = this.add.text(xmid, 400, 'You guess Dr. Kirk.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        kirkButton.setOrigin(0.5);
        kirkButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        kirkButton.on('pointerover', () => {
            kirkButton.setStyle({
                color: '#cccccc'
            });
        });
        kirkButton.on('pointerout', () => {
            kirkButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        kirkButton.on('pointerdown', () => {
            this.scene.start('page10');
        });
        // Add Mr. White button
        const whiteButton = this.add.text(xmid, 450, 'You guess Mr. White.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        whiteButton.setOrigin(0.5);
        whiteButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        whiteButton.on('pointerover', () => {
            whiteButton.setStyle({
                color: '#cccccc'
            });
        });
        whiteButton.on('pointerout', () => {
            whiteButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        whiteButton.on('pointerdown', () => {
            this.scene.start('page10');
        });
        // Add Dr. May button
        const mayButton = this.add.text(xmid, 500, 'You guess Dr. May.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        mayButton.setOrigin(0.5);
        mayButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        mayButton.on('pointerover', () => {
            mayButton.setStyle({
                color: '#cccccc'
            });
        });
        mayButton.on('pointerout', () => {
            mayButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        mayButton.on('pointerdown', () => {
            this.scene.start('page11');
        });
    }
}
class Page10 extends Phaser.Scene {
    constructor() {
        super('page10');
    }
    create() {
        const page10Text = "Mr. White glares at you. \"The correct answer was Dr. May. Dr. May is a close friend of mine, and I will not tolerate any disrespect of him. How dare you. Get out of my classroom at once, you are expelled!\"";
        const text = this.add.text(xmid, 300, page10Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add start over button
        const startOverButton = this.add.text(xmid, 500, 'Start Over', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        startOverButton.setOrigin(0.5);
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                color: '#cccccc'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        startOverButton.on('pointerdown', () => {
            this.scene.start('main');
        });
    }
}
class Page11 extends Phaser.Scene {
    constructor() {
        super('page11');
    }
    create() {
        const page11Text = "Mr. White looks at you and says, \"my what a bright student you are! Yes that is correct! Well done! You are forgiven!\" And with that, class proceeds as normal.";
        const text = this.add.text(xmid, 300, page11Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 500, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page14');
        });
    }
}
class Page15 extends Phaser.Scene {
    constructor() {
        super('page15');
    }
    create() {
        const page15Text = "You tumble through darkness, spinning wildly. Colors and shapes blur together until your feet slam onto solid ground. The air is thick with the scent of parchment and ink, the walls lined with ancient books. You're dressed in heavy robes, their weight unfamiliar on your shoulders. Confused, you stumble forward, catching your reflection in a polished brass mirror.\nThe face staring back is not your own. It's older, weary, framed by a graying beard. You are Galileo.\nMr. White's voice echoes in your mind, cold and distant: \"Be a jungle tiger.\" The words swirl around you, a riddle you cannot unravel. Before you can make sense of it, heavy footsteps echo from outside. A door bursts open, and stern-faced men march in, their eyes cold with judgment.";
        const text = this.add.text(xmid, 300, page15Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 550, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('page16');
        });
    }
}
class Page28 extends Phaser.Scene {
    constructor() {
        super('page-28');
    }
    create() {
        const page28Text = "“I can tolerate many things, but I cannot and will not tolerate the slander of my precious SWIPE. How dare you?!” Mr. White bellows. Through the corner of your eye, you see Sophia and Diya snicker behind the door.";
        const text = this.add.text(xmid, 200, page28Text, {
            fontFamily: 'Garamond',
            fontSize: '22px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                fill: true
            }
        });
        text.setOrigin(0.5);
        // Add recant button
        const truthButton = this.add.text(xmid, 400, 'You tell him that you think Diya and Sophia are behind it.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            },
            wordWrap: {
                width: 300
            },
            align: 'center'
        });
        truthButton.setOrigin(0.5);
        truthButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        truthButton.on('pointerover', () => {
            truthButton.setStyle({
                color: '#cccccc'
            });
        });
        truthButton.on('pointerout', () => {
            truthButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        truthButton.on('pointerdown', () => {
            this.scene.start('page-31');
        });
        // Add truth button
        const begButton = this.add.text(xmid, 475, 'You beg him for forgiveness.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            },
            wordWrap: {
                width: 300
            },
            align: 'center'
        });
        begButton.setOrigin(0.5);
        begButton.setInteractive({
            useHandCursor: true
        });
        begButton.on('pointerover', () => begButton.setStyle({
            color: '#cccccc'
        }));
        begButton.on('pointerout', () => begButton.setStyle({
            color: '#ffffff'
        }));
        begButton.on('pointerdown', () => {
            this.scene.start('page-29');
        });
    }
}
class Page16 extends Phaser.Scene {
    constructor() {
        super('page16');
    }
    create() {
        const page16Text = "You stand before a tribunal, the air thick with accusation. Shadows flicker on the stone walls, cast by the dim candlelight. The men before you have scorn filled gazes and their robes are heavy with authority. Their voices ring out, demanding that you renounce your belief in heliocentrism, to abandon the truth you've fought so hard to prove.\nYour heart pounds, fear coiling in your stomach. You know the consequences if you refuse. Imprisonment… or worse.";
        const text = this.add.text(xmid, 200, page16Text, {
            fontFamily: 'Garamond',
            fontSize: '22px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                fill: true
            }
        });
        text.setOrigin(0.5);
        // Add recant button
        const recantButton = this.add.text(xmid, 400, 'You give in to the pressure, recanting your beliefs to save yourself.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            },
            wordWrap: {
                width: 300
            },
            align: 'center'
        });
        recantButton.setOrigin(0.5);
        recantButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        recantButton.on('pointerover', () => {
            recantButton.setStyle({
                color: '#cccccc'
            });
        });
        recantButton.on('pointerout', () => {
            recantButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        recantButton.on('pointerdown', () => {
            this.scene.start('page17');
        });
        // Add truth button
        const truthButton = this.add.text(xmid, 475, 'You tell the truth and remain firm in your stance, no matter the cost.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            },
            wordWrap: {
                width: 300
            },
            align: 'center'
        });
        truthButton.setOrigin(0.5);
        truthButton.setInteractive({
            useHandCursor: true
        });
        truthButton.on('pointerover', () => truthButton.setStyle({
            color: '#cccccc'
        }));
        truthButton.on('pointerout', () => truthButton.setStyle({
            color: '#ffffff'
        }));
        truthButton.on('pointerdown', () => {
            this.scene.start('page19');
        });

        // Add jump out window button
        const jumpButton = this.add.text(xmid, 550, 'You jump out the window.', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            },
            wordWrap: {
                width: 300
            },
            align: 'center'
        });
        jumpButton.setOrigin(0.5);
        jumpButton.setInteractive({
            useHandCursor: true
        });
        jumpButton.on('pointerover', () => jumpButton.setStyle({
            color: '#cccccc'
        }));
        jumpButton.on('pointerout', () => jumpButton.setStyle({
            color: '#ffffff'
        }));
        jumpButton.on('pointerdown', () => {
            this.scene.start('page21');
        });
    }
}
class Page31 extends Phaser.Scene {
    constructor() {
        super('page-31');
    }
    create() {
        const page16Text = "After you repeat your theory to Mr. White, he mutters softly, “Well that does sound like something they would do.” More menacingly he declares, “Don’t worry I’ll take care of them later!” Suddenly, Mr. White looks up and exclaims, “Oh would you look at that, class is over! See you guys next time.” Congratulations, you have survived English class! You are ready for lunch!";
        const text = this.add.text(xmid, 200, page16Text, {
            fontFamily: 'Garamond',
            fontSize: '22px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                fill: true
            }
        });
        text.setOrigin(0.5);
        const nextButton = this.add.text(xmid, 500, 'LUNCH!', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        nextButton.on('pointerover', () => nextButton.setStyle({
            color: '#cccccc'
        }));
        nextButton.on('pointerout', () => nextButton.setStyle({
            color: '#ffffff'
        }));
        nextButton.on('pointerdown', () => {
            window.location.href = 'lunchJ.html';
        });
    }
}
class Page30 extends Phaser.Scene {
    constructor() {
        super('page-30');
    }
    create() {
        const page16Text = "Mr. White nods approvingly. \"Good. You understand the importance of PRISMatics. An excellent response.\" The class collectively exhales. You have passed the test. Congratulations. You have survived your first English class, and are now ready for lunch. ";
        const text = this.add.text(xmid, 200, page16Text, {
            fontFamily: 'Garamond',
            fontSize: '22px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                fill: true
            }
        });
        text.setOrigin(0.5);
        const nextButton = this.add.text(xmid, 500, 'LUNCH!', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        nextButton.on('pointerover', () => nextButton.setStyle({
            color: '#cccccc'
        }));
        nextButton.on('pointerout', () => nextButton.setStyle({
            color: '#ffffff'
        }));
        nextButton.on('pointerdown', () => {
            window.location.href = 'lunchJ.html';
        });
    }
}
class Page21 extends Phaser.Scene {
    constructor() {
        super('page21');
    }
    create() {
        const page21Text = "Your heart races as the tribunal's voices grow louder, their faces twisted in outrage. You glance at the heavy wooden door, then at the window. Both seem equally doomed. But then again… if they want to accuse you of thinking outside the box, why not think outside the building?\nWithout another thought, you bolt toward the window. One of the judges shouts, \"What is he doing?!\" Another gasps, \"Does he think he can fly?!\"\n\"E pur si vola,\" you mutter under your breath, grinning at your own terrible pun. And then you leap.\nGlass shatters dramatically—way more dramatically than you expected, actually. You're surrounded by sparkling shards, falling in slow motion like you're in some kind of epic action movie. You brace yourself for the ground, for pain, for—\nYou smack face-first into your desk. Your real desk. In Mr. White's classroom.";
        const text = this.add.text(xmid, 300, page21Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);

        // Add continue button
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 550, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        nextButton.on('pointerover', () => nextButton.setStyle({
            color: '#cccccc'
        }));
        nextButton.on('pointerout', () => nextButton.setStyle({
            color: '#ffffff'
        }));
        nextButton.on('pointerdown', () => {
            this.scene.start('page22');
        });
    }
}
class Page22 extends Phaser.Scene {
    constructor() {
        super('page22');
    }
    create() {
        const page22Text = "You blink. The classroom is exactly as you left it. Mr. White stands above you, arms crossed, looking mildly impressed but also vaguely disappointed, like a dad watching his kid almost make a basket but still miss.\n\"Jumping out the window?\" he muses, rubbing his chin. \"A bold choice. Not historically accurate, but bold.\" He shrugs. \"I respect the creativity.\"\nYour classmates stare at you. Someone stifles a laugh. Your notebook is still open to the same page where this whole mess started.\nClass proceeds on, as if nothing happened.";
        const text = this.add.text(xmid, 300, page22Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
         text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 550, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        nextButton.on('pointerover', () => nextButton.setStyle({
            color: '#cccccc'
        }));
        nextButton.on('pointerout', () => nextButton.setStyle({
            color: '#ffffff'
        }));
        nextButton.on('pointerdown', () => {
            this.scene.start('page-24');
        });
    }
}

class Page19 extends Phaser.Scene {
    constructor() {
        super('page19');
    }
    create() {
        const page19Text = "You tell the truth and remain firm in your stance. You know the consequences of your decision will be tremendous, but you persist. You are afraid, but you gain comfort in knowing that the world you once lived in will be a better place because of your sacrifice. Right after you utter the words, the head of the Tribunal smiles at you. You're terrified, you've read about this man in history books: he must be contemplating a sadistic punishment for you. However, instead of sentencing you, the man's face changes as he grows taller. A second later, Mr. White stands before you.";
        const text = this.add.text(xmid, 300, page19Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add continue button
        const continueButton = this.add.text(xmid, 550, 'Continue', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        continueButton.setOrigin(0.5);
        continueButton.setInteractive({
            useHandCursor: true
        });
        continueButton.on('pointerover', () => continueButton.setStyle({
            color: '#cccccc'
        }));
        continueButton.on('pointerout', () => continueButton.setStyle({
            color: '#ffffff'
        }));
        continueButton.on('pointerdown', () => {
            this.scene.start('page20');
        });
    }
}
class Page20 extends Phaser.Scene {
    constructor() {
        super('page20');
    }
    create() {
        const page20Text = "Mr. White transports you back to the classroom. When you arrive, the entire class stares at you, eagerly anticipating details of your trip. Mr. White announces, \"This fine student over here displayed tremendous courage during his stay in 15th Century Italy. He dove head first into a difficult situation, embodying the spirit of a jungle tiger. Well done.\" The class gives you a standing ovation, and afterwards, class proceeds on as normal.";
        const text = this.add.text(xmid, 300, page20Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 550, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        nextButton.on('pointerover', () => nextButton.setStyle({
            color: '#cccccc'
        }));
        nextButton.on('pointerout', () => nextButton.setStyle({
            color: '#ffffff'
        }));
        nextButton.on('pointerdown', () => {
            this.scene.start('page-24');
        });
    }
}
class Page27 extends Phaser.Scene {
    constructor() {
        super('page-27');
    }
    create() {
        const page20Text = "They glare at you sinisterly; they know that you have signed up for PRISMatics. And PRISMatics does not tolerate treachery. They look at each other and then burst into diabolically evil laughter. They will make you pay for this transgression. Together, they begin reciting their evil spell and break out into the magical function dance, that grants them powers that surpass even the most fantastical imagination. \n“A curse we cast with laughter’s sting, \n Now feel the pain of everything! \n Your brain will fry, your thoughts will race, \n As boredom floods your every space! \n WSIPE’s curse, we now bestow, \n A thousand insults—watch them grow!\" \n After they’ve cast their spell, you start insulting WSIPE nonstop a thousand times. After the spell’s effects wear off, you realize that you will now have to deal with an infuriated Mr. White.";
        const text = this.add.text(xmid, 300, page20Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button
        const nextButton = this.add.text(xmid, 550, 'Next Page', {
            fontFamily: 'Garamond',
            fontSize: '17px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        nextButton.on('pointerover', () => nextButton.setStyle({
            color: '#cccccc'
        }));
        nextButton.on('pointerout', () => nextButton.setStyle({
            color: '#ffffff'
        }));
        nextButton.on('pointerdown', () => {
            this.scene.start('page-28');
        });
    }
}
class Page17 extends Phaser.Scene {
    constructor() {
        super('page17');
    }
    create() {
        const page17Text = "You bow your head, your voice trembling as you recant your teachings, destroying your life's work with mere words. The tribunal watches in cold satisfaction as the words fall from your lips. The weight of your betrayal presses down on you, heavy and suffocating, but the fear of punishment is heavier still.\nThey spare your life. You are granted comfort, wealth, and security, all funded by the very church that silenced your voice. You live in a grand house with servants at your beck and call, your days filled with luxury. But the sky looks different now, the stars dimmer, as if ashamed to shine for you.";
        const text = this.add.text(xmid, 300, page17Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add next page button (you can modify this to lead to the next scene or end the game)
        const nextButton = this.add.text(xmid, 550, 'Continue', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        nextButton.on('pointerover', () => nextButton.setStyle({
            color: '#cccccc'
        }));
        nextButton.on('pointerout', () => nextButton.setStyle({
            color: '#ffffff'
        }));
        nextButton.on('pointerdown', () => {
            this.scene.start('page18');
        });
    }
}
class Page18 extends Phaser.Scene {
    constructor() {
        super('page18');
    }
    create() {
        const page18Text = "Years pass, and you watch from the safety of your home as others take up the fight you abandoned. Brave souls who dare to challenge the lies are persecuted, silenced, some even executed.\nYou live to an old age, untouched by violence or poverty. Regret grows like a shadow, stretching long and dark as your time runs out.\nOn your deathbed, frail and weak, the world around you fades. A whisper curls through the air, Mr. White's voice drifting through the haze: \"Be a jungle tiger… face the fear, or be consumed by it.\" The meaning dawns on you, cold and cruel. A jungle tiger faces danger head-on, unafraid of the consequences, fighting for truth even when the cost is high.\nYou realize that you failed. As the darkness closes in, you wish for one last chance to be brave, to be the jungle tiger you never were. But it is too late.";
        const text = this.add.text(xmid, 300, page18Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
        // Add start over button
        const startOverButton = this.add.text(xmid, 550, 'Start Over', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        startOverButton.setOrigin(0.5);
        startOverButton.setInteractive({
            useHandCursor: true
        });
        startOverButton.on('pointerover', () => startOverButton.setStyle({
            color: '#cccccc'
        }));
        startOverButton.on('pointerout', () => startOverButton.setStyle({
            color: '#ffffff'
        }));
        startOverButton.on('pointerdown', () => {
            this.scene.start('main');
        });
    }
}
class Page29 extends Phaser.Scene {
    constructor() {
        super('page-29');
    }
    create() {
        const page18Text = "“Please Mr. White, please have mercy!” you plead. “I’m sorry” Mr. White replies, “But I refuse to tolerate such disrespect. Get out of my classroom at once, and never return again!”";
        const text = this.add.text(xmid, 300, page18Text, {
            fontFamily: 'Garamond',
            fontSize: '20px',
            color: '#ffffff',
            wordWrap: {
                width: 700
            },
            lineSpacing: 10,
            align: 'center'
        });
        text.setOrigin(0.5);
    const startOverButton = this.add.text(xmid, 500, 'Start Over', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        startOverButton.setOrigin(0.5);
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                color: '#cccccc'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        startOverButton.on('pointerdown', () => {
            this.scene.start('main');
        });
    }
}
class Example extends Phaser.Scene {
    constructor() {
        super('main');
    }

    preload() {}

    create() {
        // Add welcome text
        const welcomeText = this.add.text(xmid, 300, 'Welcome to English 9', {
            fontFamily: 'Garamond',
            fontSize: '32px',
            color: '#ffffff',
            align: 'center'
        });
        welcomeText.setOrigin(0.5);
        const authorText = this.add.text(xmid, 340, 'By: Diya Rajan', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            align: 'center'
        })
        authorText.setOrigin(0.5);
        // Add next button
        const nextButton = this.add.text(xmid, 400, 'Next', {
            fontFamily: 'Garamond',
            fontSize: '18px',
            color: '#ffffff',
            backgroundColor: '#333333',
            padding: {
                x: 20,
                y: 10
            }
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effect
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                color: '#cccccc'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                color: '#ffffff'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            this.scene.start('introduction');
        });
        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                // this.scene.start('new-scene');
                // this.switchScene();
            },
        });
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
    scene: [Example, Introduction, Page2, Page12, Page13, Page8, Page3, Page4, Page5, Page6, Page7, Page9, Page14, GuessTheTeacher, Page10, Page11, Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22, Page24, Page25, Page26, Page27, Page28, Page31, Page29, Page30]
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