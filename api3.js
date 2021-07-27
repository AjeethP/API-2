fetch("https://www.scorebat.com/video-api/v1/")
.then((data)=>{
    console.log(data);
    return data.json();
})
.then((soccerdata)=>{
    let soccerlist=document.createElement("div");
    soccerlist.className=("container")
    
    soccerdata.forEach((datas) => {
        let soccer=document.createElement("div")
        soccer.className=("GOT-container")
        soccer.innerHTML=`
       
        <div class="details">

        <img class="image" src="${datas.thumbnail}"></img>
        <p class="name"><span class="heading">Name:</span>${datas.competition.name}</p>
        <p class="name"><span class="heading">ID:</span>${datas.competition.id}</p>
        <p class="name"><span class="heading">Title:</span>${datas.title}</p>
        <p class="name"><span class="heading">Date:</span>${datas.date}</p>
        <p class="name"><span class="heading">Side1:</span>${datas.side1.name}</p>
        <p class="name"><span class="heading">Side2:</span>${datas.side2.name}</p>

        
        <div>`
        
        soccerlist.append(soccer)
    });
    document.body.append(soccerlist)
})
