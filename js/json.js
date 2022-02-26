const loadBuddies= ()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayLode(data) )
};

loadBuddies();
 const displayLode = data => {
   // console.log(data.results)
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buudies');
    for( const buddy of buddies){
        const p= document.createElement('p');
        p.innerText=buddy.email;
        buddiesDiv.appendChild(p)
    }
 }