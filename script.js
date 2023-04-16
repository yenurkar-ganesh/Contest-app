let url = "https://kontests.net/api/v1/all";
let response = fetch(url);

response.then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);

    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);

      ihtml += `
      <div class="card" style="width: 18rem;">

        <img src="https://source.unsplash.com/480x300/?programming" class="card-img-top" target="_blank">

      <div class="">
        <h5 class="">${contests[item].name}</h5>

        <p>Website : ${contests[item].site}</p>
        <p>Start At : ${contests[item].start_time}</p>

        <p>End At : ${contests[item].end_time}</p>
        <a href="${contests[item].url}" class="btn btn-primary">Visit Competition</a>
      </div>
    </div>  
    `;
    }
    cards.innerHTML = ihtml;
  });
