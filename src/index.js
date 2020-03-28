import $ from 'jquery';

var playPromise = $('#backVid')[0].play();

new fullpage('#fullpage', {
    //options here
    licenseKey: ,
    paddingTop: '4.6rem',
    paddingBottom: '5vh',
    controlArrows: false,
    autoScrolling:true,
    scrollHorizontally: true,
    anchors:['animation1', 'product1', 'functionality1', 'story1', 'sustainability1', 'aboutUs1', 'contact1'],
    onLeave: (origin, destination, direction) => {
        var leavingSection = this;
        if (origin.index == 0) {
            $('#heads')[0].style.visibility = 'visible';
        } else if (origin.index == 1 && direction == 'up') {
            return false;
        }
    },
    afterRender: () => {
        //fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        setTimeout(() => {
            //$('#backVid')[0].autoplay = true;
            //if (playPromise !== undefined) {
            //    playPromise.then(function() {
                  // Automatic playback started!
            //    }).catch(function(error) {
                  // Automatic playback failed.
                  // Show a UI element to let the user manually start playback.
            //    });
            //}

        }, 1500);
        $('#backVid')[0].addEventListener(
            'ended', 
            () => {
                $('#scrolAnim')[0].style.visibility = 'visible';
                fullpage_api.setAllowScrolling(true);
                fullpage_api.setKeyboardScrolling(true);
            }, false
        );
    }
    });

    //methods

    //hide header on startPage

    //header.addEventListener()

    //hover effect product page
    var lemon = document.getElementById('lemon');
    var mint = document.getElementById('mint');
    var salt = document.getElementById('salt');

    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');

    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    lemon.style.filter = "blur(0)";
    mint.style.filter = "blur(5px)";
    salt.style.filter = "blur(5px)";

    lemon.addEventListener(
        'mouseover',
        () => {
            text1.style.display = "block";
            text2.style.display = "none";
            text3.style.display = "none";
            lemon.style.filter = "blur(0)";
            mint.style.filter = "blur(5px)";
            salt.style.filter = "blur(5px)";
        }
    );

    mint.addEventListener(
        'mouseover',
        () => {
            text1.style.display = "none";
            text2.style.display = "block";
            text3.style.display = "none";
            lemon.style.filter = "blur(5px)";
            mint.style.filter = "blur(0)";
            salt.style.filter = "blur(5px)";
        }
    );

    salt.addEventListener(
        'mouseover',
        () => {
            text1.style.display = "none";
            text2.style.display = "none";
            text3.style.display = "block";
            lemon.style.filter = "blur(5px)";
            mint.style.filter = "blur(5px)";
            salt.style.filter = "blur(0)";
        }
    );
