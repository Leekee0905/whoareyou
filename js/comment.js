function makeComment() {
    let name = $('#comment-name').val();
    let comment = $('#comment-text-input').val();
    
    let card_html = `
     <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${comment}</p>
              </div>
            </div>`;
    event.preventDefault();        
    $('.card').append(card_html);
}