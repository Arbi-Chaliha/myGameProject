/*let score=0;
cross=true;
audio=new Audio('gameMusic.mp3');
audiogo=new Audio('gameOver2.mp3');
setTimeout(()=>
{
  audio.play();
},2000)
document.onkeydown=function(e)//on pressing a key from the keyboard,the event should be triggered. In our case,the ninja should jump
{
    
    if(e.key=='ArrowUp')
    {
        dino=document.querySelector(".dino");
        dino.classList.add('animateNinja');
        setTimeout(()=>{
            dino.classList.remove('animateNinja');
        },700)
    }
    if(e.key=='ArrowRight')
    {
        dino=document.querySelector(".dino");
        dinoX=parseInt(getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+'px';
    }
    if(e.key=='ArrowLeft')
    {
        dino=document.querySelector(".dino");
        dinoX=parseInt(getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX-112+'px';
    }
}
setInterval(()=>
{
    dino=document.querySelector(".dino");
    gameOver=document.querySelector(".gameOver");
    obstacle=document.querySelector(".obstacle");
    dx=parseInt(getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(getComputedStyle(obstacle,null).getPropertyValue('top'));

    let offsetX=Math.abs(dx-ox);
    let offsetY=Math.abs(dy-oy);
    if(offsetX<120&&offsetY<100)
    {
        gameOver.style.visibility='visible';
        obstacle.classList.remove('animateObstacle');
        audiogo.play();
        setTimeout(()=>
        {
           
            audio.pause();
            
        },1000);
        setTimeout(()=>
        {
           
            audiogo.pause();
            
        },2000);
    }
    else if(offsetX<145&&cross)
    {
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>
        {
           cross=true;
        },1000);
        setTimeout(()=>
        {
            aniDur=parseFloat(getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.3;
            obstacle.style.animationDuration=newDur+'s';
        },500)
    }

},100);
function updateScore(score)
{
    const scoreCount = document.querySelector('.scoreCount');
    scoreCount.innerHTML="Your score is:"+score;
}*/
/*As the score keeps on increasing, let us increase the obstacle speed*/






/*let score = 0;
let cross = true;
const audio = new Audio('gameMusic.mp3');
const audiogo = new Audio('gameOver2.mp3');
const fireballSound = new Audio('fireballSound.mp3');

setTimeout(() => {
    audio.play();
}, 2000);

document.onkeydown = function(e) {
    if (e.key === 'ArrowUp') {
        const dino = document.querySelector('.dino');
        dino.classList.add('animateNinja');
        setTimeout(() => {
            dino.classList.remove('animateNinja');
        }, 700);
    }
    if (e.key === 'ArrowRight') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
    if (e.key === 'ArrowLeft') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + 'px';
    }
    if (e.key === 'k' || e.key === 'K') {
        killFireball();
    }
};

setInterval(() => {
    const dino = document.querySelector('.dino');
    const gameOver = document.querySelector('.gameOver');
    const obstacle = document.querySelector('.obstacle');
    const dx = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
    const dy = parseInt(getComputedStyle(dino, null).getPropertyValue('top'));

    const ox = parseInt(getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(getComputedStyle(obstacle, null).getPropertyValue('top'));

    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);
    if (offsetX < 120 && offsetY < 100) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateObstacle');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audiogo.pause();
        }, 2000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            const aniDur = parseFloat(getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            const newDur = aniDur - 0.3;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

    if (score >= 5) {
        dropFireball();
    }
}, 100);

function updateScore(score) {
    const scoreCount = document.querySelector('.scoreCount');
    scoreCount.innerHTML = "Your score is: " + score;
}

function dropFireball() {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    fireball.style.left = Math.floor(Math.random() * 90) + 'vw'; // Random position
    document.body.appendChild(fireball);

    fireball.addEventListener('animationend', () => {
        if (parseInt(getComputedStyle(fireball).getPropertyValue('top')) >= window.innerHeight - 50) {
            // Fireball hit the ground, player loses
            document.querySelector('.gameOver').style.visibility = 'visible';
            audiogo.play();
            audio.pause();
            setTimeout(() => {
                audiogo.pause();
            }, 2000);
        }
        fireball.remove();
    });
}

function killFireball() {
    const fireballs = document.querySelectorAll('.fireball');
    fireballs.forEach(fireball => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop < window.innerHeight - 50) {
            fireballSound.play();
            fireball.classList.add('hidden');
            fireball.remove();
        }
    });
}*/



/*let score = 0;
let cross = true;
let fireballActive = false;
const audio = new Audio('gameMusic.mp3');
const audiogo = new Audio('gameOver2.mp3');
const fireballSound = new Audio('fireballSound.mp3');

setTimeout(() => {
    audio.play();
}, 2000);

document.onkeydown = function(e) {
    if (e.key === 'ArrowUp') {
        const dino = document.querySelector('.dino');
        dino.classList.add('animateNinja');
        setTimeout(() => {
            dino.classList.remove('animateNinja');
        }, 700);
    }
    if (e.key === 'ArrowRight') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
    if (e.key === 'ArrowLeft') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + 'px';
    }
    if (e.key === 'k' || e.key === 'K') {
        killFireball();
    }
};

setInterval(() => {
    const dino = document.querySelector('.dino');
    const gameOver = document.querySelector('.gameOver');
    const obstacle = document.querySelector('.obstacle');
    const dx = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
    const dy = parseInt(getComputedStyle(dino, null).getPropertyValue('top'));

    const ox = parseInt(getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(getComputedStyle(obstacle, null).getPropertyValue('top'));

    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);
    if (offsetX < 120 && offsetY < 100) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateObstacle');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audiogo.pause();
        }, 2000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            const aniDur = parseFloat(getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            const newDur = aniDur - 0.2;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

    if (score >= 5 && !fireballActive) {
        fireballActive = true;
        dropFireball();
    }
}, 100);

function updateScore(score) {
    const scoreCount = document.querySelector('.scoreCount');
    scoreCount.innerHTML = "Your score is: " + score;
}

function dropFireball() {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    fireball.style.left = Math.floor(Math.random() * 90) + 'vw'; // Random position
    document.body.appendChild(fireball);

    fireball.addEventListener('animationend', () => {
        if (parseInt(getComputedStyle(fireball).getPropertyValue('top')) >= window.innerHeight - 50) {
            // Fireball hit the ground, player loses
            document.querySelector('.gameOver').style.visibility = 'visible';
            audiogo.play();
            audio.pause();
            setTimeout(() => {
                audiogo.pause();
            }, 2000);
        }
        fireball.remove();
        fireballActive = false;
        setTimeout(() => {
            if (score >= 5) {
                fireballActive = true;
                dropFireball();
            }
        }, 7000); // 7 seconds delay
    });
}

function killFireball() {
    const fireballs = document.querySelectorAll('.fireball');
    fireballs.forEach(fireball => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop < window.innerHeight - 50) {
            fireballSound.play();
            fireball.classList.add('hidden');
            fireball.remove();
            score += 2; // Increase score by 2 for killing a fireball
            updateScore(score);
        }
    });
}*/


/*let score = 0;
let cross = true;
let fireballActive = false;
const audio = new Audio('gameMusic.mp3');
const audiogo = new Audio('gameOver2.mp3');
const fireballSound = new Audio('fireballSound.mp3');

setTimeout(() => {
    audio.play();
}, 2000);

document.onkeydown = function(e) {
    if (e.key === 'ArrowUp') {
        const dino = document.querySelector('.dino');
        dino.classList.add('animateNinja');
        setTimeout(() => {
            dino.classList.remove('animateNinja');
        }, 700);
    }
    if (e.key === 'ArrowRight') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
    if (e.key === 'ArrowLeft') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + 'px';
    }
    if (e.key === 'k' || e.key === 'K') {
        killFireball();
    }
};

setInterval(() => {
    const dino = document.querySelector('.dino');
    const gameOver = document.querySelector('.gameOver');
    const obstacle = document.querySelector('.obstacle');
    const dx = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
    const dy = parseInt(getComputedStyle(dino, null).getPropertyValue('top'));

    const ox = parseInt(getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(getComputedStyle(obstacle, null).getPropertyValue('top'));

    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);
    if (offsetX < 120 && offsetY < 100) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateObstacle');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audiogo.pause();
        }, 2000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            const aniDur = parseFloat(getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            const newDur = aniDur - 0.3;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

    if (score >= 2 && !fireballActive) {
        fireballActive = true;
        dropFireball();
    }
}, 100);

function updateScore(score) {
    const scoreCount = document.querySelector('.scoreCount');
    scoreCount.innerHTML = "Your score is: " + score;
}

function dropFireball() {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    fireball.style.left = Math.floor(Math.random() * 90) + 'vw'; // Random position
    document.body.appendChild(fireball);

    fireball.addEventListener('animationend', () => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop >= window.innerHeight - 50) {
            // Fireball hit the ground, player loses
            document.querySelector('.gameOver').style.visibility = 'visible';
            audiogo.play();
            audio.pause();
            setTimeout(() => {
                audiogo.pause();
            }, 2000);
        }
        fireball.remove();
        fireballActive = false;
        setTimeout(() => {
            if (score >= 5) {
                fireballActive = true;
                dropFireball();
            }
        }, 7000); // 7 seconds delay
    });
}

function killFireball() {
    const fireballs = document.querySelectorAll('.fireball');
    fireballs.forEach(fireball => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop < window.innerHeight - 50) {
            fireballSound.play();
            fireball.classList.add('hidden');
            fireball.remove();
            score += 2; // Increase score by 2 for killing a fireball
            updateScore(score);
        }
    });
}*/


/*let score = 0;
let cross = true;
let fireballActive = false;
const audio = new Audio('gameMusic.mp3');
const audiogo = new Audio('gameOver2.mp3');
const fireballSound = new Audio('fireballSound.mp3');

setTimeout(() => {
    audio.play();
}, 2000);

document.onkeydown = function(e) {
    if (e.key === 'ArrowUp') {
        const dino = document.querySelector('.dino');
        dino.classList.add('animateNinja');
        setTimeout(() => {
            dino.classList.remove('animateNinja');
        }, 700);
    }
    if (e.key === 'ArrowRight') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
    if (e.key === 'ArrowLeft') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + 'px';
    }
    if (e.key === 'k' || e.key === 'K') {
        killFireball();
    }
};

const gameInterval = setInterval(() => {
    const dino = document.querySelector('.dino');
    const gameOver = document.querySelector('.gameOver');
    const obstacle = document.querySelector('.obstacle');
    const dx = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
    const dy = parseInt(getComputedStyle(dino, null).getPropertyValue('top'));

    const ox = parseInt(getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(getComputedStyle(obstacle, null).getPropertyValue('top'));

    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);
    if ((offsetX < 120 && offsetY < 100) || gameOver.style.visibility === 'visible') {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateObstacle');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audiogo.pause();
        }, 2000);
        clearInterval(gameInterval);
        return;
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

    if (score >= 2 && !fireballActive) {
        fireballActive = true;
        dropFireball();
    }
}, 100);

function updateScore(score) {
    const scoreCount = document.querySelector('.scoreCount');
    scoreCount.innerHTML = "Your score is: " + score;
}

function dropFireball() {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    fireball.style.left = Math.floor(Math.random() * 90) + 'vw'; // Random position
    document.body.appendChild(fireball);

    fireball.addEventListener('animationend', () => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop >= window.innerHeight - 50) {
            // Fireball hit the ground, player loses
            document.querySelector('.gameOver').style.visibility = 'visible';
            audiogo.play();
            audio.pause();
            setTimeout(() => {
                audiogo.pause();
            }, 2000);
            clearInterval(gameInterval);
        }
        fireball.remove();
        fireballActive = false;
        setTimeout(() => {
            if (score >= 2 && document.querySelector('.gameOver').style.visibility !== 'visible') {
                fireballActive = true;
                dropFireball();
            }
        }, 7000); // 7 seconds delay
    });
}

function killFireball() {
    const fireballs = document.querySelectorAll('.fireball');
    fireballs.forEach(fireball => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop < window.innerHeight - 50) {
            fireballSound.play();
            fireball.classList.add('hidden');
            fireball.remove();
            score += 2; // Increase score by 2 for killing a fireball
            updateScore(score);
        }
    });
}*/

let score = 0;
let cross = true;
let fireballActive = false;
const audio = new Audio('gameMusic.mp3');
const audiogo = new Audio('gameOver2.mp3');
const fireballSound = new Audio('fireballSound.mp3');

setTimeout(() => {
    audio.play();
}, 2000);

document.onkeydown = function(e) {
    if (e.key === 'ArrowUp') {
        const dino = document.querySelector('.dino');
        dino.classList.add('animateNinja');
        setTimeout(() => {
            dino.classList.remove('animateNinja');
        }, 700);
    }
    if (e.key === 'ArrowRight') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
    if (e.key === 'ArrowLeft') {
        const dino = document.querySelector('.dino');
        const dinoX = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + 'px';
    }
    if (e.key === 'k' || e.key === 'K') {
        killFireball();
    }
};

const gameInterval = setInterval(() => {
    const dino = document.querySelector('.dino');
    const gameOver = document.querySelector('.gameOver');
    const obstacle = document.querySelector('.obstacle');
    const dx = parseInt(getComputedStyle(dino, null).getPropertyValue('left'));
    const dy = parseInt(getComputedStyle(dino, null).getPropertyValue('top'));

    const ox = parseInt(getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(getComputedStyle(obstacle, null).getPropertyValue('top'));

    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);
    if ((offsetX < 120 && offsetY < 100) || gameOver.style.visibility === 'visible') {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateObstacle');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audiogo.pause();
        }, 2000);
        clearInterval(gameInterval);
        clearInterval(fireballInterval);
        return;
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 100);

function updateScore(score) {
    const scoreCount = document.querySelector('.scoreCount');
    scoreCount.innerHTML = "Your score is: " + score;
}

function dropFireball() {
    if (document.querySelector('.gameOver').style.visibility === 'visible') return;

    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    fireball.style.left = Math.floor(Math.random() * 90) + 'vw'; // Random position
    document.body.appendChild(fireball);

    fireball.addEventListener('animationend', () => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop >= window.innerHeight - 50) {
            // Fireball hit the ground, player loses
            document.querySelector('.gameOver').style.visibility = 'visible';
            audiogo.play();
            audio.pause();
            setTimeout(() => {
                audiogo.pause();
            }, 2000);
            clearInterval(gameInterval);
            clearInterval(fireballInterval);
        }
        fireball.remove();
    });
}

const fireballInterval = setInterval(() => {
    if (score >=5) {
        dropFireball();
    }
}, 6000); // Fireballs drop every 6 seconds

function killFireball() {
    const fireballs = document.querySelectorAll('.fireball');
    fireballs.forEach(fireball => {
        const fireballTop = parseInt(getComputedStyle(fireball).getPropertyValue('top'));
        if (fireballTop < window.innerHeight - 50) {
            fireballSound.play();
            fireball.classList.add('hidden');
            fireball.remove();
            score += 2; // Increase score by 2 for killing a fireball
            updateScore(score);
        }
    });
}




