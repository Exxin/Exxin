'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); })

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    
    filterBtn[i].addEventListener('click', function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        
        for(let i = 0; i < pages.length; i++) {
            if(this.innerHTML.toLowerCase() == pages[i].dataset.page) {
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navigationLinks[i]. classList.remove('active');
            }
        }
    });
}

// Background cuber animation
document.addEventListener('DOMContentLoaded', function () {
    var cubes = document.querySelector('.cubes');
    var speed = 40; // Швидкість анімації в секундах
  
    cubes.style.animationDuration = speed + 's';
});

    document.addEventListener('DOMContentLoaded', function() {
        const customCursor = document.getElementById('customCursor');
        const pointerCursor = document.querySelector('.pointerCursor');
        const pointerHand = document.querySelector('.pointerHand');

        document.addEventListener('mousemove', function(e) {
            customCursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
        });

        document.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('mouseover', () => {
                pointerCursor.style.display = 'none';
                pointerHand.style.display = 'block';
            });
            element.addEventListener('mouseout', () => {
                pointerCursor.style.display = 'block';
                pointerHand.style.display = 'none';
            });
        });
    });

document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.getElementById('customCursor');
    const pointerCursor = document.querySelector('.pointerCursor');
    const pointerHand = document.querySelector('.pointerHand');
    document.addEventListener('mousemove', function(e) {
        customCursor.style.transform = `translate(${e.clientX + window.scrollX}px, ${e.clientY + window.scrollY}px)`;
    });
    document.addEventListener('scroll', function() {
        customCursor.style.transform = `translate(${e.clientX + window.scrollX}px, ${e.clientY + window.scrollY}px)`;
    });
    document.querySelectorAll('a, button, .service-card').forEach(element => {
        element.addEventListener('mouseover', () => {
            pointerCursor.style.display = 'none';
            pointerHand.style.display = 'block';
        });
        element.addEventListener('mouseout', () => {
            pointerCursor.style.display = 'block';
            pointerHand.style.display = 'none';
        });
    });
});


// TypeString function

const commands = String.raw`exxinblood@gmail.com/:~ cd MAIN
exxinblood@gmail.com/MAIN/:~ ls`;

const assassin = String.raw`
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+=========-==------------------:--::-::::::::::::::::.                   .+.: *-=%@%%%@@%%@%@%%%##%%%%#*::                                                        
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+=====-==-====--=----------:--::--::-::-:::::::::.                     +.*#%%:%%@@@@@@@%@%%@%%%#%%%#-**:                                                        
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+========-==-==--=--------------::--::-:-::-:::.                     :.*%%%#:%@@@%@%%@%%%%#%%*=-##*:                                                           
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*========-=-==-=--=--------:--:--::--::-::::..                 .     :%%@%*-%%%%#%@@%=#%*=##                                                                  
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+====-====--==------------------:-::-::::..           .    ::     :#%#%%+::*#%-%%%* +=  ..                                                                  
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+===========-==-=-----------::---:--::::.            :: :-:     :-#*:*#:    =  :+                                                                          
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*======-==-==--=-=-----------:--:::::..    -:      := -=.     ..+#..*:                                                                                    
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+=======-====--=-------------:--:::       :     :+-.-       : -  ::        :            . :                                                             
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+========-==-=--=-------------:::     ::.      =*.:.   .  ..    -                      .                                                               
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*=========-==-==--=-------:--::.    :-    :  -*+ :       :                            :.                                                              
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+============-==----------:::   :+-    :..:*#-     : . :          --.                -                                                              
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%+==========-==--==-------::  :=+::   .:::-##:     --: .         :--:.  .:   .       :-                                                             
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*+=============-==-----:.  :+++:.   :-+:*##:    :-+  .        :-=----: .::: :       --:   :.   :.       ::                                        
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+=========-==-==-=--.:. :=+=..    -=::###:    :-:: .-      .: ...  :.      :..-.  :=*#:.:=-:..------.          :-:                              
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%++============---:::: .=+=       .+.:#%#=    :: =..-             .             .:+%#%@@#+**===:         .:-:                                   
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*+===========--::--. -+-        -+.-#%#*     - ==.-     -#@:  : +..:- -.  . :--=%@@@@@@@@%+===:-.  :..:@@@-    --                             
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+=========--::--: .==.        =+.-##%#:    : =* :    -*@%*   =:+ .:-::.#*-==++#@@@@@@@#++=+++ .--=::+@@#..  .--                             
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%++========-:---: :-. .       =+.:##%#= .    -*-    .=%@@@%.  +=**==+@@@@@#%@@@@@@@@@#-=+#%+%:.::.%@@@#==  .-=-.                            
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*+=======---=-.  : ::..     +*..*#%*+ -     **.    -%@@%*@@#+==##%@@@@@@@@@@@@@@@@@*.-#@@@@@@%#@@@*++ . -====.                          . 
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#++======--=-:    :..-     =*-.=###=- =.    =+:   :+@@@@@@@@%@@@@%@@@@@@@@@@@@@@@@+  -@@@@@@@@@#%@#@@@#====-                          .  
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*#@@@@@@@@@@@@@@@@+++====-===:   :-:.=     -== :*+#--:.+:    =+-   -%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+   -@@@@@@@@@@@@@@@#++==-                            .
@@@@@@@@%-:=+**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-..-=: .+%@@@@@@@@@@*+========-.  :--.--    .=:. --*+ . .+*.   ---  :*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+    +@@@@@@@@@%%@%%*++=-.   .            .:         : 
@@@@@@@@*: -++*@@@@@@@@@@@@@@@@@@@@@@@#=-::-*#%##****=. :=+%@@@@@@@@@@#++=======-  ---:.=     :     :*-   .++.    -:  =%@@@@@@@@@@@@@@@*@@@@@@@@@@@@=     *@@@@@@%%@%%%%++==-   :            -         ::  
@@@@@***=:..:=+++*#%%%%%%%%%%#############+-::*#####**+-=-:.=#@@@@@@@@@%*++=====-..---- . :    :     .+:.   .--    -: .*@@@@@@@@@@@@##@@@@@@@@@@@@@@=      #@@@@@%@@%%%#++==.:.                      :-    
@@@#+-.  :-:  =*##*+*##########%#%%%%%%%%%%#*::#%%%%%%%%*.  .=*@@@@@@@@@@*+++====-.-==-:  :-.          :::    .-    .: -%@@@%@@@@@%*@@@@@@@@@@@@@@@@=      =@@@@@%@%%@%*+=-::                . :           
@@#-       ==. *#%%#+#%%%%%%%%%%%%%%%%######*: +%%%%%%%%#+  -+=@@@@@@@@@@@#++++===::-===:  ---.           ::    ::  ..  :*:=@@%*@*:%@@#=@@@@@@@@@@@@+      +@@@@@@%@@%#=-                 --::    :        
@@+ .      .+= .##%%#*#####***********+++*++-  :##******+-   =+*@@@@@@@@@@@%++++===--====-::----::                    .    .=::::::*@@*@@@@@@@@@@@@@+    =@@@@@@@@@%%#:                 =:     .:.         
@@+ .       ::  .::=*###*##%%%%%####******+++++++****+=--::.::-=%@@@@@@@@@@@@*++++==+=+====---===-:                       =*:::::::+@@@@@@@@@@@@@@@@=.:#@@@@@@@@@@@%#-:-.         :. -.                    
@@* .       ::  :=-   =++*****************#**+++=+-::...:::==-+=*@@@@@@@@@@@@@%+++++++++++========--.:                      ..:::::#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%*=-                                    
@@%=:.      .   -=-     :********+***************+=.. :...:=:-++=@@@@@@@@@@@@@@@*+++++=+++++++++======----::                    .::#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@*-:. :                                  
@@@+            =+:      =+******************+=**+=::..::.-+==++=@@@@@@@@@@@@@@@@#++++++==+=+==++++=======---:..          ......::-@@@@@@@@@@@@@@#*#%%@@@@@@@@@%@%*===-:                                   
@@@+            =+:      +****+==++===************+:::----==--==%@@@@@@@@@@@@@@@@@%+=======================---:::. ===+=:   ::::::-%%%@@##*=:    :=+-    :=+*%@%#++==-    ..                               
@@@*            =+-      +****+****************++======++*##++++#@@@@@@@@@@@@@@@@@%=-==+#########+--========-----:.#@@@#=     :::-@*+@@@@@@*+-          .-%%@%%*++=-.      .                               
@@@#.           =+-      ++*******+**++=-:-=+=+--:+****+-.-=*+***@@@@@@@@@@@@@@@@=+##%%%%%*#%%%%%%###+-::--------:+@@@@@@*-     .:::@@@@@@@@@#-       .+@@@%%#++=-.   .... ...                             
@@@@#.        .===:     :++*+=-::=+*++-   =+=..===+**++-=*###+++=##*%@@@@@@@@@@@=##%%%#%##%%#=+##%%%%###=::.::::%#@@+=@*-#%+:     :%*@@@@@@@@@@@%+==+%@@%@@%+==-   ............                            
@@@@%: :     :==:   -==++************+-   ++*++*++**++: =+++=:=-=++#@@%#@@@@@@%+#+##%%##+**---*###+*-+%%%#+---.   .::..:.:...       =:+@@@%@@@@@@@@@@@@@%%+==:    ............                             
@@@@%---     -==:  .=++***++*++++++**+-   +***+=+=++-. :==-. .-===+++++*#@@@@%+%%#%%###*=:::-+##*=-::-#%%%##+----:   ....:::%@@*.     :#@@@@@@@@@@@@@@%%*+=:     ............. ..                          
@@@@@*.     .==-   .=++===--:::.  .=-=-  :+*++-:::..-:       :====+==+++#%@@@#%####+===--:::::::::::-*####*+=:-::..     ....:--##-       =%@@@@@@@@@@%#+=:      ...:..:.........                           
@@@@@@+.   .==-        ..::         :=-..-=+=-       :       -========++@#@@*##**=--=--=-:.::::::::::::-:::::::::::.        ::.::-=--      .+%@@@@@@#+=:        ....:...:.........   .                     
@@@@@@@@#++#*:...:-=*%@@@@%-         :==-:                  .-==---=+=++#@@*##--=--=---  :--=-=--=+*=:::::::::::.::..       .:::**::*@#:       =**=-:.         ..::...................                     
@@@@@@@@@@@@@@@@@@@@@@@@@@@*-      :-=====-.                :-=-:===++++#@@+##+---:..:   .:--=+++===:   ..:::::::..::.        -=+#@@@@#@@*.                    .:..:.::..:..........                       
@@@@@@@@@@@@@@@@@@@@@@@@@@@#*      :-#++++*+=-:             :::::-=+====#*+:+=-=-:--::::::::::::::::::     .. .::::::::          -*#@@@@@@@@*.                 .:.::....:..:........... ..                 
@@@@@@@@@@@@@@@@@@@@@@@@@*%@-      :=%++++@%@*=-             .::-==+===- .:  ..:-:..:::...:-:::::::::::..       .::..:.           .-**%@@@@@@@@-              ...:..:..:..:..:............                 
@@@@@@@@@@@@@@@@@@@@@@@#@@@@%      .-%+++*@@@@@+:            :-===+===-.:.        .::-----:    ::::::::..::      ..:--::           -+++##%@@@*   :             ..:..:..:.......:...........                
@@@@@@@@@@@@@@@@@@@@@@@%*-:#=.     .-#+=+%@@@@@#-          :==--=-==---+      .  .::  ... ..       ..::.          ----::-           :=+*####@.  :-                ...:..::.:.....:............             
@@@@@@@@@@@@@@@@@@@@@@@%@#*%@:      -----*@@@@@%:         =++=========. =#:        .-=::.:. .::      :::.          :::::--           .:-===:     -                    .....:..:..............              
@@@@@@@@@@@@@@@@@@@@@@@#@@@%*:      -=-:.:+**++-        .-++*+==++=+=-    =--:    ::   :=--:   .       ..            .::--:            -+**=                             ...:...:..:........  ..     .     
@@@@@@@@@@@@@@@@@@@@@@@@##@%+:      ---               ::--=+++==++===:      =---.   --:   .::          .--:          ::.::.             -+*+                                ...:............... ...  .     
@@@@@@@@@@@@@@@@@@@@@@@@*@%@@-      -:       =-==-:--:-=++==--===++=-       .+=--.  .:::   :--:          ..             .:.  .-           =+                                 ..:..:..:..:.............     
@@@@@@@@@@@@@@@@@@@@@@@#@@@@%@@%*#%%#+-.   -:====-::-===++=+==-+====:        +*==-    :--   :--.           .             ... :-:           :                                  ..:..:......:......... ...   
@@@@@@@@@@@@@@@@@@@@@@@#@@@*-+@@%+#=*++=::::-===-:::-==+===+==-=++=-         +***-    .---.  ---                          .  .:.                                              ..:..:..:............... ..  
@@@@@@@@@@@@@@@@@@@@@@@@%@%=+#%#@@@@#-:::-===--::::::-::==+===-===-          +##*+.    .-==:.:-::                            :::::                                            .:..:.....:..:...........   .
@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@%==::-+#*----:::::::::====--====--.          +*#**-    .:--=--=::.                            :---:                                          .::.:..::............:........
@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@*-:::::.::..:.:::::::::----==++==-:           .**##*-     .:==---: :                             :---.                                         ...::....::..:..:..:..........
@@@@@@@@@@@@@@@@@@@@@@@@@@%@+-:::::::::::::::::.::...:::=--+==-             -*###*=:     :--==-   :                              :-:                                         .:...::....:..:...............
@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@:.::-::::::::::::::::::::::-==+--             +*##***:     ::--=-       .                            :              .-:-:                       .::..:.:..:......:.....:.....
@@@@@@@@@@@@@@@@@@@@@@@@@@@%#*-+@#*=:::::::::::::::::::---=+++-            =***#**+:.    ::----    .  .                                            :--+****+=.                 ..:..::.:..:.:....:.........
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*++-::.......::.::.::---===-+**+:          .+*#**##*+-:    :-:--:       :                                              ---*******+:               .::...:..:....:....:....:..
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#-:::::::::::::::::--::-===***+:         -***##%*%#=-:    .-.--        :                                               .--*******=:                .:..:..:.:....:....:.....
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*::::::::::::::::::::-==-=+**++-        =**##+%%@%#=-      - .:                                                          --*****-..                 ..:.:..:.::....:....:...
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#-:::::::::::::::::::.:=+**++=:       .:****+%*#*=-:     .-                                                              :-+***+:::                 ...::...:..:....:....:.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=:::::::::.:..      :=+***++:     :+*+==**+#%*=::      :.                                                            :  :-=*****+                   ..::.:..::.:..:.:....
`;

let blink = document.querySelector('.blink');
const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
	return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
};

const ResetTerminal = () => {
	code.innerHTML = '<span class="blink">█</span>';
	blink = document.querySelector('.blink');
};

const RenderString = characters => {
	blink.insertAdjacentHTML('beforeBegin', characters);
};

const TypeString = async characters => {
	for(const character of characters.split('')) {
		await Delay(RandomNumber(100, 200));
		RenderString(character);
	}
}

const DrawLines = async ( characters, min = 50, max = 500 ) => {
	for(const line of characters.split('\n')) {
		await Delay(RandomNumber(min, max));
		RenderString(`${line}\n`);
	}
}

const DrawCommands = async commands => {
	for( const line of commands.split('\n')){
		// Seperate the directory and the command
		const [currentDir, command] = line.split(':~ ');

		// Print the directory, type the command and finish with new line
		RenderString(`${currentDir}:~ `);
		await TypeString(command);
		RenderString('\n');
	}
}


// Start the code
(async()=> {
	await DrawCommands("/:~ ssh exxinblood@gmail.com -p 1998");
	await Delay(1000);
	RenderString("exxinblood@gmail.com password:################");
	await Delay(5000);
	RenderString("\n");
	await DrawCommands(commands);
	RenderString('\nassassin.js    exxin.js\n\n');
	await DrawCommands('exxinblood@gmail.com/MAIN:~ node assassin.js');
	ResetTerminal();
	await Delay(3000);
	await DrawCommands('exxinblood@gmail.com/MAIN:~ node assassin.js');
	await DrawLines( assassin );
	await TypeString("\n\nWanna listen a music? SCATTLE - ASSASSIN");
	await Delay(5000);
	// ResetTerminal();
	// await DrawCommands('exxinblood@gmail.com:~ KEY=3db7ca618243da1ba3bc76ab14bcf07b node exxin.js');
	// await DrawLines(exxin);
})();