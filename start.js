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
        this.add.text(xmid, 300, 'A Day in the Life of a PRISMS Student', textSettingBig).setOrigin(0.5, 0.5);
        // Create the Next button
        const authorText = this.add.text(xmid, 340, 'Presented by PRISMatics', {
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
        this.add.text(xmid, 300, "Choose a character!!", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const choice1a = this.add.text(xmid, 400, 'Jordan', buttonSetting)
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
        const choice1b = this.add.text(xmid, 350, 'Leslie', buttonSetting)
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
   
    }
}
class Page1alunch extends Phaser.Scene {
    constructor() {
        super('Page-1alunch');
    }
    create() {
        this.add.text(xmid, 200, "Your schedule for today is: \n Algebra 2 - Mr. Jones \n Announcements \n English - Mr. White \n Lunch \n Creative Writing - Mr. Barnes \n Honors Chem - Dr. Weintraub \n Clubs - PRISMatics", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const a2 = this.add.text(xmid, 470, 'Start my day!', buttonSetting)
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
            .on('pointerdown', () => { window.location.href = 'alg2.html'; });
   
    }
}
class Page1blunch extends Phaser.Scene {
    constructor() {
        super('Page-1blunch');
    }
    create() {
        this.add.text(xmid, 200, "Your schedule for today is: \n Linear Algebra - Dr. Sood \n Announcements \n English - Mr. White \n Lunch \n Organic Chem - Mr. Zhang \n Modern Physics - Dr. Kirk \n Clubs - PRISMatics", {
            fontSize: '24px',
            fill: '#FFFFFF',
            fontFamily: 'Garamond',
            align: 'center',
                lineSpacing: 10,
                wordWrap: {
                    width: 600
                }
        }).setOrigin(0.5, 0.5);
        const b2 = this.add.text(xmid, 470, 'Start my day!', buttonSetting)
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
            .on('pointerdown', () => { window.location.href = 'linalg.html'; });
   
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
    scene: [Examplelunch, Page1lunch, Page1alunch, Page1blunch]
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