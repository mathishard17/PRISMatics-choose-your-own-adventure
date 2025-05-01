const xmid = window.innerWidth/2;
class EidanForgotToMake1 extends Phaser.Scene {
    constructor() {
        super('eidanforgottomake1');
    }
    create() {
        const storyText = this.add.text(xmid, 250,
            "You broke your neck.", {
                fontSize: '24px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center'
            }
        ).setOrigin(0.5);
        // Create start over button
        const startOverButton = this.add.text(xmid, 350, 'Start Over', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to return to the main scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('mainScene');
        });
    }
}
class Page4A extends Phaser.Scene {
    constructor() {
        super('page4A');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "You write a terrifying horror story about a gargantuan tarantula that enjoys the taste of human flesh—so vivid, so chilling, that it almost feels real.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create continue button
        const continueButton = this.add.text(xmid, 400, 'You decide to be courageous and continue on as if nothing happened.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        continueButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        continueButton.on('pointerover', () => {
            continueButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        continueButton.on('pointerout', () => {
            continueButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        continueButton.on('pointerdown', () => {
            this.scene.start('eidanforgot2');
        });
        // Create scared button
        const scaredButton = this.add.text(xmid, 500, 'You become scared because you are a wuss, quickly abandon horror, and try another genre.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        scaredButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        scaredButton.on('pointerover', () => {
            scaredButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        scaredButton.on('pointerout', () => {
            scaredButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to return to page3A
        scaredButton.on('pointerdown', () => {
            this.scene.start('page3A');
        });
    }
}
class EidanForgot2 extends Phaser.Scene {
    constructor() {
        super('eidanforgot2');
    }
    create() {
        const storyText = this.add.text(xmid, 250,
            "The story becomes so real that it suddenly begins jumping out of your laptop. First its legs, then its face with its 8 creepy eyes, then finally, it leaps out of the screen, latching onto your face, and spitting acidic vomit into your eyes.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create start over button
        const startOverButton = this.add.text(xmid, 400, 'Start Over', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to return to the main scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('mainScene');
        });
    }
}
class Page5A extends Phaser.Scene {
    constructor() {
        super('page5A');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "Your writing is so powerful that Daniel Zeng, the enigmatic literary genius of PRISMatics and inventor of disintegration himself, materializes from the ether.\nWithout hesitation, he disintegrates your story so no mortal can ever read it again.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create start over button
        const startOverButton = this.add.text(xmid, 450, 'Next Page', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to return to the main scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('eidanforgot30');
        });
    }
}
class EidanForgot30 extends Phaser.Scene {
    constructor() {
        super('eidanforgot30');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "Suddenly, with a sweeping motion of his hand, a shimmering portal bursts into existence, swirling with ethereal light. From its radiant depths, celestial figures begin to emerge—angels adorned in robes of stardust, spirits wreathed in golden fire, and luminous beings humming with divine energy. Among them, the deities of creativity and literature step forward, their very presence exuding an overwhelming aura of wisdom and inspiration.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create believe button
        const believeButton = this.add.text(xmid, 450, 'You believe in the gods.', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        believeButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        believeButton.on('pointerover', () => {
            believeButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        believeButton.on('pointerout', () => {
            believeButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to go to page7B
        believeButton.on('pointerdown', () => {
            this.scene.start('page7B');
        });
        // Create don't believe button
        const startOverButton = this.add.text(xmid, 550, 'You don\'t believe in gods.', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to return to the main scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('page7A');
        });
    }
}
class End extends Phaser.Scene {
    constructor() {
        super('end');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "Congratulations! You have survived a full day at PRISMS!!!", {
                fontSize: '28px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        const startOverButton = this.add.text(xmid, 450, 'Start Over', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to go to the end scene
        startOverButton.on('pointerdown', () => {
            window.location.href = 'index.html';
        });
        const startOverButton1 = this.add.text(xmid, 390, 'CLICK HERE!', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton1.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton1.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton1.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to go to the end scene
        startOverButton1.on('pointerdown', () => {
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfXutZZiwjK_-ZtzYMTkN5M8VMU8st1ZAA4ktzxgAN19nYZGA/viewform?usp=sharing';
        });
    }
}
class Page7B extends Phaser.Scene {
    constructor() {
        super('page7B');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "You declare your belief in the gods, and they smile upon you.\n\"Since you believe in us, we shall grant you one wish.\"", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create start over button
        const startOverButton = this.add.text(xmid, 450, 'You ask for unlimited money.', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to go to the end scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('page8A');
        });
    }
}
class Page7A extends Phaser.Scene {
    constructor() {
        super('page7A');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "You boldly state that you don't believe in gods.\nYou scoff at their presence, insisting that your success is your own doing.\nThe deities pause for a moment. Then, they laugh.\n\"That's funny,\" one of them says. \"You amuse us. You may live, but probably not for long\"", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create start over button
        const startOverButton = this.add.text(xmid, 450, 'Next Page', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to go to the end scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('end');
        });
    }
}
class Page8A extends Phaser.Scene {
    constructor() {
        super('page8A');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "You suddenly find yourself drowning in riches. Infinite wealth is now yours.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create next button
        const nextButton = this.add.text(xmid, 450, 'Now that you\'re rich, you quit school.', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        nextButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to go to the end scene
        nextButton.on('pointerdown', () => {
            this.scene.start('eidanforgot40');
        });

        // Create continue supporting button
        const supportButton = this.add.text(xmid, 520, 'You continue supporting Prismatics.', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);

        // Make button interactive
        supportButton.setInteractive({
            useHandCursor: true
        });

        // Add hover effects
        supportButton.on('pointerover', () => {
            supportButton.setStyle({
                backgroundColor: '#666666'
            });
        });

        supportButton.on('pointerout', () => {
            supportButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });

        // Add click handler to go to the end scene
        supportButton.on('pointerdown', () => {
            this.scene.start('end');
        });
    }
}
class EidanForgot40 extends Phaser.Scene {
    constructor() {
        super('eidanforgot40');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "You have quit PRISMS.", {
                fontSize: '28px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create start over button
        const startOverButton = this.add.text(xmid, 450, 'Start Over', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to return to the main scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('mainScene');
        });
    }
}
class EidanForgot41 extends Phaser.Scene {
    constructor() {
        super('eidanforgot41');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "You become engrossed in your Brawl Stars game. But not everyone appreciates your lack of focus. Mr. White, the club mentor, is unamused. He tells you \"If you ever do this again I will kick you out of the club.\"", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);

        // Create continue button
        const continueButton = this.add.text(xmid, 450, 'Continue', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);

        // Make button interactive
        continueButton.setInteractive({
            useHandCursor: true
        });

        // Add hover effects
        continueButton.on('pointerover', () => {
            continueButton.setStyle({
                backgroundColor: '#666666'
            });
        });

        continueButton.on('pointerout', () => {
            continueButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });

        // Add click handler to return to page3A to continue the story
        continueButton.on('pointerdown', () => {
            this.scene.start('page3A');
        });
    }
}
class Page4B extends Phaser.Scene {
    constructor() {
        super('page4B');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "What should you write next?", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create math button
        const mathButton = this.add.text(xmid, 400, 'A thought-provoking story about math and disintegration.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        mathButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        mathButton.on('pointerover', () => {
            mathButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        mathButton.on('pointerout', () => {
            mathButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        mathButton.on('pointerdown', () => {
            this.scene.start('page5A');
        });

        // Create Brawl Stars button
        const brawlStarsButton = this.add.text(xmid, 500, 'You write a piece about Brawl Stars.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);

        // Make button interactive
        brawlStarsButton.setInteractive({
            useHandCursor: true
        });

        // Add hover effects
        brawlStarsButton.on('pointerover', () => {
            brawlStarsButton.setStyle({
                backgroundColor: '#666666'
            });
        });

        brawlStarsButton.on('pointerout', () => {
            brawlStarsButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });

        // Add click handler
        brawlStarsButton.on('pointerdown', () => {
            this.scene.start('page5B');
        });
    }
}
class Page5B extends Phaser.Scene {
    constructor() {
        super('page5B');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "Unfortunately, Diya, the club leader, does not appreciate your off-topic writing.\n\"This is a writing club, not a gaming club,\" she declares. \"You're no longer allowed in this club, and you shall be barred from entering this domain for as long as time flows.\"", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);

        // Create start over button
        const startOverButton = this.add.text(xmid, 450, 'Start Over', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);

        // Make button interactive
        startOverButton.setInteractive({
            useHandCursor: true
        });

        // Add hover effects
        startOverButton.on('pointerover', () => {
            startOverButton.setStyle({
                backgroundColor: '#666666'
            });
        });

        startOverButton.on('pointerout', () => {
            startOverButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });

        // Add click handler to return to the main scene
        startOverButton.on('pointerdown', () => {
            this.scene.start('mainScene');
        });
    }
}
class Page3A extends Phaser.Scene {
    constructor() {
        super('page3A');
    }

    create() {
        const storyText = this.add.text(xmid, 300,
            "You stare at the blank page, determined to prove yourself. You have two themes in mind: Comedy and Horror. Both have their perks, however, you can only choose to do one of them.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create horror button
        const horrorButton = this.add.text(xmid, 400, 'You write about horror.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        horrorButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        horrorButton.on('pointerover', () => {
            horrorButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        horrorButton.on('pointerout', () => {
            horrorButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        horrorButton.on('pointerdown', () => {
            this.scene.start('page4A');
        });
        // Create comedy button
        const comedyButton = this.add.text(xmid, 500, 'You decide to write about comedy.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        comedyButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        comedyButton.on('pointerover', () => {
            comedyButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        comedyButton.on('pointerout', () => {
            comedyButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        comedyButton.on('pointerdown', () => {
            this.scene.start('page4B');
        });
    }
}
class Page2B extends Phaser.Scene {
    constructor() {
        super('page2B');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "\"I have a pet dog. He's my best friend and my only friend seeing as in middle school I had no friends. Why else would I come here\"?\n\nThe club members nod partially in approval, and pity, impressed by your genuine energy, and also feeling kind of sorry for your existence.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create writing button
        const writingButton = this.add.text(xmid, 400, 'You sit down and start writing.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        writingButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        writingButton.on('pointerover', () => {
            writingButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        writingButton.on('pointerout', () => {
            writingButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        writingButton.on('pointerdown', () => {
            this.scene.start('page3A');
        });

        // Create procrastinate button
        const procrastinateButton = this.add.text(xmid, 500, 'Instead of writing, you procrastinate by playing Brawl Stars in the clubroom.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        procrastinateButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        procrastinateButton.on('pointerover', () => {
            procrastinateButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        procrastinateButton.on('pointerout', () => {
            procrastinateButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        procrastinateButton.on('pointerdown', () => {
            this.scene.start('eidanforgot41');
        });
    }
}
class Page2A extends Phaser.Scene {
    constructor() {
        super('page2A');
    }
    create() {
        const storyText = this.add.text(xmid, 300,
            "The room goes silent as you recall your bizarre accident.\n\"I broke my neck once!\"\n\nThe members of the club exchange glances, unsure if you're joking or serious. Some eye you with disdain, while others stare blankly back at you, waiting for this preface to end so they can continue with their insignificant lives.", {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
            }
        ).setOrigin(0.5);
        // Create choice button
        const flusterButton = this.add.text(xmid, 400, 'You get so flustered that you trip on a chair leg', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        flusterButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        flusterButton.on('pointerover', () => {
            flusterButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        flusterButton.on('pointerout', () => {
            flusterButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        flusterButton.on('pointerdown', () => {
            this.scene.start('eidanforgottomake1');
        });
        // Create pivot button
        const pivotButton = this.add.text(xmid, 500, 'Realizing this might not be the best topic, you pivot to discussing something else.', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center',
            wordWrap: {
                width: xmid
            }
        }).setOrigin(0.5);
        // Make button interactive
        pivotButton.setInteractive({
            useHandCursor: true
        });
        // Add hover effects
        pivotButton.on('pointerover', () => {
            pivotButton.setStyle({
                backgroundColor: '#666666'
            });
        });
        pivotButton.on('pointerout', () => {
            pivotButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler to return to the main scene
        pivotButton.on('pointerdown', () => {
            this.scene.start('page2B');
        });
    }
}
class Example extends Phaser.Scene {
    constructor() {
        super('mainScene');
    }

    preload() {}

    create() {
        // Create welcome text
        const welcomeText = this.add.text(xmid, 250, 'Welcome to PRISMatics!', {
            fontSize: '32px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        // Add author credit
        const authorText = this.add.text(xmid, 290, 'By: Eidan Ho', {
            fontSize: '20px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        // Create next button
        const nextButton = this.add.text(xmid, 350, 'Next', {
            fontSize: '24px',
            fontFamily: 'Garamond',
            color: '#ffffff',
            backgroundColor: '#4a4a4a',
            padding: {
                x: 20,
                y: 10
            },
            align: 'center'
        }).setOrigin(0.5);
        // Make button interactive
        nextButton.setInteractive({
            useHandCursor: true
        });

        // Add hover effects
        nextButton.on('pointerover', () => {
            nextButton.setStyle({
                backgroundColor: '#666666'
            });
        });

        nextButton.on('pointerout', () => {
            nextButton.setStyle({
                backgroundColor: '#4a4a4a'
            });
        });
        // Add click handler
        nextButton.on('pointerdown', () => {
            // Clear existing elements
            welcomeText.destroy();
            authorText.destroy();
            nextButton.destroy();
            // Add new story text
            const storyText = this.add.text(xmid, 250,
                "The day has finally come. You stand before the doors of Prismatics, the most prestigious creative writing club at PRISMS. Rumors say that only the most talented and eccentric storytellers survive in this club, while others fade into obscurity. \nYou take a deep breath. It's time to introduce yourself.", {
                    fontSize: '20px',
                    fontFamily: 'Garamond',
                    color: '#ffffff',
                    align: 'center',
                    lineSpacing: 10,
                    wordWrap: {
                        width: 600
                    }
                }
            ).setOrigin(0.5);
            // Create first choice button
            const choiceButton = this.add.text(xmid, 400, 'You share a strange but true fact about yourself.', {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                backgroundColor: '#4a4a4a',
                padding: {
                    x: 20,
                    y: 10
                },
                align: 'center',
                wordWrap: {
                    width: xmid
                }
            }).setOrigin(0.5);
            // Make button interactive
            choiceButton.setInteractive({
                useHandCursor: true
            });

            // Add hover effects
            choiceButton.on('pointerover', () => {
                choiceButton.setStyle({
                    backgroundColor: '#666666'
                });
            });

            choiceButton.on('pointerout', () => {
                choiceButton.setStyle({
                    backgroundColor: '#4a4a4a'
                });
            });
            // Add click handler
            choiceButton.on('pointerdown', () => {
                this.scene.start('page2A');
            });
            // Create second choice button
            const choiceButton2 = this.add.text(xmid, 500, 'You introduce everyone to your beloved pet dog, Max.', {
                fontSize: '20px',
                fontFamily: 'Garamond',
                color: '#ffffff',
                backgroundColor: '#4a4a4a',
                padding: {
                    x: 20,
                    y: 10
                },
                align: 'center',
                wordWrap: {
                    width: xmid
                }
            }).setOrigin(0.5);
            // Make button interactive
            choiceButton2.setInteractive({
                useHandCursor: true
            });
            // Add hover effects
            choiceButton2.on('pointerover', () => {
                choiceButton2.setStyle({
                    backgroundColor: '#666666'
                });
            });
            choiceButton2.on('pointerout', () => {
                choiceButton2.setStyle({
                    backgroundColor: '#4a4a4a'
                });
            });
            // Add click handler
            choiceButton2.on('pointerdown', () => {
                this.scene.start('page2B');
            });
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
    scene: [Example, Page2A, Page2B, EidanForgotToMake1, Page3A, Page4A, EidanForgot2, Page4B, Page5A, Page5B, EidanForgot30, Page7A, Page7B, Page8A, EidanForgot40, EidanForgot41, End]
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