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
        this.add.text(xmid, 300, 'Welcome to Creative Writing', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'By: Cynthia Yuan', {
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
        this.add.text(xmid, 200, 'Qweak… “You know back in 1996 the Red Sox had a massive victory over the Athletics by having 3 consecutive home runs and saving their unbeatable streak in their Summer season？” Yes, Mr. Barnes rushes in with seemingly convincing, but unprovable baseball knowledge. You never really did your creative writing homework, but with your sneaky hand maneuvering, you were able to quickly finish them in class. However, this time, it is a bit different… Not five Haikus, not ten idioms, you have to do the whole Soliloquy, and coincidentally, you forgot once again.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 370, 'Let’s first try opening my computer', buttonSetting)
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
        const choice1b = this.add.text(xmid, 420, 'Try to rush through the essay', buttonSetting)
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
        const choice1c = this.add.text(xmid, 470, 'Don’t care, I just sleep', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-1c'));
   
const choice1d = this.add.text(xmid, 520, '…I’m done with homework bruh', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-1d'));
const choice1e = this.add.text(xmid, 570, 'I have to write my brilliant ideas down!', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('page-1e'));
   
    }
}
class Page1a extends Phaser.Scene {
    constructor() {
        super('page-1a');
    }
    create() {
        this.add.text(xmid, 200, 'You pull out your computer and try to open it at an acute angle, bright enough to see the screen. You opened Google doc, you opened a new file, and the screen brightness kept rising. It is too bright now, your face is entirely lit up even in the morning sunshine…Oh, your eyebrows are ignited by the brightness! Your lashes go into flames. You couldn’t see anything, you chose to go to the water source—the pond. You jumped over from 210 to the ground, with no injury, and quickly rushed to the pond. Congratulations, you have survived Creative Writing!', {
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
            .on('pointerdown', () => window.location.href = 'honorschem.html');
   
        
    }
}
class Page1b extends Phaser.Scene {
    constructor() {
        super('page-1b');
    }
    create() {
        this.add.text(xmid, 200, 'You pull out your computer and try to open it at an acute angle, bright enough to see the screen. You opened Google doc, you opened a new file, and the screen brightness kept rising. Your fingers run across the keyboard, trying to make minimal sound. Quickly, you were typing half of the document up…Your fingers rush around and click on the keyboards. You are done! You have to fill the entire document with your Soliloquy, you feel utterly relieved. You raise your neck and try to regain the focus on Mr. Barnes. Where is Mr. Barnes?', {
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
        this.add.text(xmid, 200, 'Where are my classmates…? And you realized, from the noises outside up and down the stairs, that the class was finished 5 minutes ago. And you were in your mind flow—undisturbed, hyperfocused, you didn’t realize how time quickly passed by your fingertips. Yes, you finished your Soliloquy, but was that in class, or you did do it as homework already? Congratulations, you have survived Creative Writing!', {
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
            .on('pointerdown', () => window.location.href = 'honorschem.html');
    }
}
class Page1c extends Phaser.Scene {
    constructor() {
        super('page-1c');
    }
    create() {
        this.add.text(xmid, 200, 'You did not bother to do the Soliloquy. You’ve been a good student—you just pulled an all-nighter, it is perfectly fine to be wacky for the day. You put your computer in front of you, you flip it open, and you lean forward until it covers your entire head, or you choose to believe so. The class noticed the utter obviousness of you sleeping in the class. With slight breathing noises, the class watched you sleep. You felt you closed your eyes for a few split seconds, you felt the white space, and…You opened your eyes, the classroom was empty. ', {
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
            .on('pointerdown', () => this.scene.start('page-1cc'));
   
    }
}
class Page1cc extends Phaser.Scene {
    constructor() {
        super('page-1cc');
    }
    create() {
        this.add.text(xmid, 200, 'You went through the Albemarle, and you saw no one was there.“What?” The sun was still high up in the sky, you could tell, certainly, they had not left because school ended. As you wondered where people were, you touched the dust, thick and sandy dust on the table. You breathed the dust air in the wind and you saw the dust particles dancing, swing and you realized, you may have time traveled too many years later. There is no way for you to return to your time period.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choice1a = this.add.text(xmid, 350, 'Start Over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Example'));
    }
}
class Page1d extends Phaser.Scene {
    constructor() {
        super('page-1d');
    }
    create() {
        this.add.text(xmid, 200, 'You were always frustrated with homework. What is there to work about? It is just work, work, work, all day, all night, time fillers. You knew it never had a purpose, it never made sense to you. Tedious, and time-consuming, what if you devote the time to something useful? You had the anger stored inside you, burning, like standing under the midday sun on the most cruel, bright summer day. You felt the anger, you could not restrain but left the classroom. Bang, the room closes, locked. You, having nothing on yourself, started stepping down to the main hall, and eventually left the Albemarle. The outside scenery seems quiet, and undisturbed, bird chirps punctured the forest once in a while. You sat on the stairs, reflecting, listening to the sounds of the breeze. Squirrels were running, deers were talking, and the strip lights of neighbors were lit up. Too relaxed, you didn’t hear the footsteps approaching behind you. ', {
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
            .on('pointerdown', () => this.scene.start('page-1dd'));
   
    }
}
class Page1dd extends Phaser.Scene {
    constructor() {
        super('page-1dd');
    }
    create() {
        this.add.text(xmid, 200, 'It is the visiting family teachers, and principals. They saw you coming from the class and sitting on the ground. Oh, how embarrassing and…weird. But you didn’t care anymore. From doing many and many times of skipping classes and being absent unexcused, you decided to chase your own path and discover your life. You quit school of your own voilition', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choice1a = this.add.text(xmid, 350, 'Start Over', buttonSetting)
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
            .on('pointerdown', () => this.scene.start('Example'));
    }
}
class Page1e extends Phaser.Scene {
    constructor() {
        super('page-1e');
    }
    create() {
        this.add.text(xmid, 200, 'You opened your computer and tried to do the writing in class. You thought of a great idea: marvelous, exquisite, and sophisticated, something never seen before in the history of literature, something so unique, something extraterrestrial…Ideas came to you like water from a massive flood, you quickly typed the words, so fast and loud but you did not care. Oh, what an amazing piece! Shakespeare would bow down to his knees reading such…Devil-possessed, piece of gold…', {
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
            .on('pointerdown', () => this.scene.start('page-1ee'));
   
    }
}
class Page1ee extends Phaser.Scene {
    constructor() {
        super('page-1ee');
    }
    create() {
        this.add.text(xmid, 200, 'You indulged in your own writing, you could almost see the rain dash, breathe the ozone, touch the droplets on the tip of your fingers, slips of water went down your throat, and you could almost feel the rain. You blinked, and you opened your eyes, to see the lush, natural rainforest with echos of creeping animals. It was not an illusion. You were in the forest, alone.', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
   const choice1a = this.add.text(xmid, 350, 'Start Over', buttonSetting)
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
    scene: [Example, Page1, Page1a, Page1b, Page1bb, Page1c, Page1cc, Page1d, Page1dd, Page1e, Page1ee]
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