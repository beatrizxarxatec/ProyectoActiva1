let xp_sent = 0;

async function createSentHistory() {
    const currentUserId = sessionStorage.getItem('currentUserId');

    const url = "http://localhost:3000/rewards?" + new URLSearchParams({ currentUserId: currentUserId });
    const rewards = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    const rewardsJSON = await rewards.json();
    let rewardsString = '';
    let rewardItem = '';
    xp_sent = 0;
    for (let reward of rewardsJSON) {
        const theDate = new Date(reward.date).toDateString();
        rewardItem = `
        <div class="pAlign">
            <div>
                <span class="pointsRed"><b>${reward.xp_points}</b></span> PUNTOS ENVIADOS ${theDate}
            </div>
            <p> ${reward.description} </p>
            <p> para <b>${reward.name} ${reward.first_surname}</b></p>
        </div>
        <hr id="hrHistory"/>
        </p>
        `;
        rewardsString += rewardItem;
        xp_sent += reward.xp_points;
    }
    document.getElementById("elementosenviados").innerHTML = rewardsString;
}

window.addEventListener('load', createSentHistory); 
