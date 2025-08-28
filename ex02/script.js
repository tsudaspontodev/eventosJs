const img = document.getElementById('img');
const msg = document.getElementById('msg');

img.addEventListener('mouseover', function() {

    msg.textContent = "Tu ta me alisando... sai fora....";
    msg.addEventListener('mouseout', function() {
        msg.textContent = ''

    });
});