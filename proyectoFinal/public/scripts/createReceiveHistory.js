async function createReceivedHistory(){
    const currentUserId = sessionStorage.getItem(`currentUserId`);

    const url = "http://localhost:3000/received?" + new URLSearchParams({currentUserId: currentUserId});
    const received = await fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json'}});
    
    const receivedJSON = await received.json();
    let receivedString = "";
    let receivedItem = "";
    
    xp_sent = 0;
    for( let received of receivedJSON){
        const theDate = new Date(received.date).toDateString();
        receivedItem = `
        <div class="pAllign">
            <div>
                <span class="pointsRed"><b>${received.xp_points}<b></span> PUNTOS RECIBIDOS ${theDate}
            </div>
        </div>`
    }
}