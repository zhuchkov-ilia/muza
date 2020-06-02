let floor_price=0;
let ceil_price=100000;

$('#submit-filter').on('click', function (){
    floor_price=Number.parseInt($('#price-floor').val());
    ceil_price=Number.parseInt($('#price-ceil').val());
    check_filters()
});

function check_filters() {
    let tracks=document.getElementsByClassName('track-desc');

    let input_genres=document.getElementsByName('genre');
    let picked_genres=[];
    for (let b=0; b<input_genres.length;b++){
        if (input_genres[b].checked){
            picked_genres.push(input_genres[b].value)
        }
    }

    for (let i=0;i<$(".tracks").children('.track-desc').length;i++){
        let track_price=Number.parseInt(tracks[i].dataset.price);
        let track_genre=tracks[i].dataset.genre;
        if (!(track_price>=floor_price && track_price<=ceil_price) || !(picked_genres.indexOf(track_genre) !== -1)){
            tracks[i].classList.add('unvisible')
        }
        else{
            tracks[i].classList.remove('unvisible')
        }

    }

}