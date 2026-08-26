//this is my game accidental princess, a choose your own adventure game modelled after otome games.

//making the functions for updating game image, text, and button choices

//function for updating text

function updateText(newText){
    document.getElementById('story-text').textContent = newText;
}

//function for updating image

function updateImage(newImage){
    document.getElementById('story-image').src = newImage
}

//function for making new button each time with diff choices

function setChoice(buttonNumber, label, callback){
    let button = document.getElementById('choice-btn-' + buttonNumber);
    button.textContent = label
    button.onclick = callback //here we will put the function for the next part of the story 
    button.style.display = 'inline-block' //show the button
}

//function for hiding button when only one choice

function hideChoice(buttonNumber){
    let button = document.getElementById('choice-btn-' + buttonNumber);
    button.style.display = 'none' //hide the button
}

//starting game

function startGame(){
    updateText("You were supposed to die in the car crash. When you leaped forward to save the orange kitten you fed everyday outside of your campus, you thought for sure your fate was sealed and accepted it. But as you felt the impact of the car throw you off your feet, instead of hitting the ground with a thud, you find yourself waking up in a strange bed.A voice calls out from outside the ornate bedroom doors in the unfamiliar powder pink room, and the doors open. “Princess Raeliana, you must make haste!” You have been reincarnated into your favorite romance novels universe in the 1800s as the main character and have multiple characters vying for your affection. Who will you choose? What will your second life be like?");
    updateImage("assets/game/startimage.jpg");
    setChoice(1, "Start" , princeStory);
    hideChoice(2);

}

function princeStory(){
    updateText("The maid of the palace comes in and dresses you. She informs you that the Prince of the neighbouring kingdom is in town and wishes to make your acquaintance. He was described as having a reputation of being a bit of an outcast, with his sullen eyes and unsmiling face. But you also remember that in a later volume of the series, he was shown to have become a benevolent and generous king and had a soft spot for his younger sister. Do you accept his invitation to have tea at his palace?");
    updateImage("assets/game/prince1.jpg");
    setChoice(1, "Yes", prince2);
    setChoice(2, "No", bakerStory);
}

function prince2(){
    updateText("You go to the afternoon tea at the prince’s palace. You are taken aback when he walks into the room, the books didn’t do a good job of capturing how attractive he looked. He had dark black hair that fell perfectly over his coffee skin, and eyes that looked like they were peering into your very soul.\nHe was awkward at first, and most of his responses were curt, and it seemed he only wished to discuss your father, the king’s health, and matters considering governance. But as time went by, he started to get a bit more relaxed. He tries asking you questions about yourself eventually, and looks adorably shy while doing so. You suddenly remember that father, the king, and the kingdom have been at odds with his kingdom for decades. As you’re about to leave, he grabs your sleeve and pulls you to a stop, “Princess… I-I was wondering if you wished to go walk around the gardens with me sometime?” Do you accept knowing what you do now?");
    updateImage("assets/game/teatime.jpg")
    setChoice(1, "Yes", princeEnding);
    setChoice(2, "No", bakerStory);
}

function princeEnding(){
    updateText("You go on to meet the prince again. And again. Until one day, he proposes marriage, you accept, knowing that your father is against the union. You have a lavish ceremony in his kingdom, followed by several years of martial bliss. However, soon after the prince becomes king, his need for power starts to drive him wild, and in his mindless pursuit, he wishes to capture your former kingdom. Decades of animosity come to a head, and the prince eventually uses you as leverage against your father to win the war. You have disappointed your father and yourself, and now live with a power-hungry maniac, with no escape. Sorry, better luck next time! You got the worst ending.");
    updateImage("assets/game/prince-ending.jpeg");
    setChoice(1, "Play again", startGame);
    hideChoice(2);
}

function bakerStory(){
    updateText("You decline the prince’s offer politely. You decide to go outside and explore the kingdom you now live in. As you’re walking through the town square’s market, someone snatches your necklace, which you remember your character’s deceased mother had given her before she died. Before you can decide what to do, a man whooshes past you, yelling at the thief. In no time, he wrestles him to the ground and retrieves your necklace. As he gives it back to you, you notice he has flour on his hands and is wearing an apron. He looks surprised to see you as you see a look of recognition over his face. “Pardon me, Your Majesty. I did not realise that was you. I’m Auguste, the town’s best baker” he says, with a smile as sweet as pie and a mischievous glint in his eye.You thank him profusely, and as you’re about to leave, he pipes up. “Would you like to try my award-winning blueberry scones? There’s a reason they call me the best baker in town” he chimes. Do you accept?");
    updateImage("assets/game/bakermeeting.jpg");
    setChoice(1, "Yes", baker2);
    setChoice(2, "No", bakerNo);
}

function bakerNo(){
    updateText("You politely bow and say no and carry on with your exploration of the kingdom. As you survey the kingdom, you notice that the people primarily live in poverty, and women are relegated only to childcare and domestic duties.\nMost children don’t receive any formal schooling; only children of nobles have private tutors giving them lessons. Your heart hurts when you look down at your dress made of fine silk from the best ateliers in Paris and then at a girl close to your age, wearing a dress that seems too small and too threadbare for her. As she holds a younger sibling in her arms and walks through the market dejectedly, you lock eyes for a few seconds. You feel all her pain and sorrow at that moment and know you must do something. You decide to speak to your father, the King, and convince him to introduce programs for the betterment of the people. It takes much convincing to greenlight the first program, building a school in the town square.\nLater, following the school’s success, you bring about many changes to the kingdom’s societal structure by giving presentations to your father and his cabinet via hand-drawn parchment.\nYou literally become the people’s princess, a champion of the common people. Soon, after ascending to the throne as the first-ever Queen without a king, you dismantle the monarchy and implement a socialist democratic government. Your kingdom comes to be known as the happiest place on earth, with thousands flocking there after hearing tales of this mythical kingdom where everyone is equal, and the government is by the people, and for the people. Your kingdom becomes the first place on Earth to allow same-sex marriage in the medieval era. Congratulations! You got the best ending.");
    updateImage("assets/game/raeending.jpeg");
    setChoice(1, "Play again", startGame);
    hideChoice(2);
}

function baker2(){
    updateText("You say yes, and the two of you walk over to Auguste’s bakery. Inside, it’s warm and the smell of baked goods envelopes you like a warm hug. For the first time since coming into this unvierse, you feel yourself beginning to relax. Minutes turn into hours as you slip into easy conversation with Auguste. You laugh along as he tells you stories about his kooky little sisters, and how he became a baker while trying to learn how to make their favorite treats. His scruffy brown hair, and the way his eyes kiss in the corners as he looks at you and smiles make your heart beat faster. He extends a hand forward to grab yours, and clears his throat, his cheeks beginning to turn red, “Would you maybe want to help me bake the next batch of cookies? I know it’s not work fit for a princess, but…” he looks at you hopefully. Do you accept?");
    updateImage("assets/game/raexbaker.png");
    setChoice(1, "Yes", baker3);
    setChoice(2, "No", bakerNo)

}

function baker3(){
    updateText("You take your hand and he whisks you away to the baking station. You don’t know the first thing about baking, but he doesn’t mind. You spend all day with Auguste learning how to bake cookies, you’re sure you’ve increased his workload and gotten him off track, but he doesn’t seem to mind. After a day full of baking, laughter and flour fights, you sit down together basking in the warmth of the oven, eating leftover cookie dough. He extends a hand to your cheek, caressing it, “Sorry, you had some flour on there…However, I’m wondering if I could be afforded the honour to see you again, if it’s okay by you and… those guys?” He says, gesturing to your guards lined up by the door. The guards beckon you to the side and whisper into your ear, “Your Majesty, we don’t think this is a good idea. His Majesty, the King, will certainly be displeased to hear of you consorting with a…. measly commoner.” You look back at him, looking eagerly at you. Do you accept his invitation, knowing that the King might shun you for doing so?");
    update_image("bakery.jpeg")
    updateImage("");
    setChoice(1, "Yes", bakerEnding)
    setChoice(2, "No", bakerNo)
}

function bakerEnding(){
    updateText("You accept and start visiting every day. Even when the King finds out and warns you never to meet Levi again, you still do.\nYour days are filled with laughter, loads of flour, and cookie dough. When the king gives you an ultimatum and threatens to cut you off, Levi takes your hand and asks you to marry him, saying nothing would make him happier. You accept, are stripped of your title as Princess, and have to give up your couture dresses, your fine bedroom with gold fixtures, and the most comfortable mattress you could ever sleep on. Instead, you spend your days alongside Levi, baking and helping run the bakery. You don’t have much, but you have love. You got the good ending.");
    updateImage("assets/game/bakercottage.jpeg");
    setChoice(1, "Play again", startGame);
    hideChoice(2);
}