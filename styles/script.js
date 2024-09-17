const rokokMenyala = document.getElementById('rokok2');
const buttonShutOff = document.getElementById('shutOff');
const navigation = document.getElementById('navigation');

buttonShutOff.addEventListener('click', function() {
    rokokMenyala.style.opacity = "0";
    buttonShutOff.style.opacity = "0";
});

navigation.style.maxHeight = '0';

function menuToggle() {
    if(navigation.style.maxHeight == '0px')
    {
        navigation.style.maxHeight = '400px';
    }
    else {
        navigation.style.maxHeight = '0px';
    }
};

navigation.style.transition = 'all 0.5s ease-in-out';